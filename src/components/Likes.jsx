import { useEffect, useState } from "react";
import {useLike, useUser } from "../hooks/apiHooks.js";
import { useUserContext } from "../hooks/contextHooks.js";



const Likes = ({ item }) => {

  const {postLike, deleteLike, getLikesByMedia, getLikesByUser} = useLike();
  const { user } = useUserContext();

  //state
  const [likes, setLikes] = useState(0);
  const [userLikesThis, setUserLikesThis] = useState(false);
  const [userLikesArray, setUserLikesArray] = useState(0);
  const [likeIdThisItem, setLikeIdThisItem] = useState(0);


  useEffect(( ) => {
    const fetchLikeCount = async () => {
      try {
        const likeArrayByMedia = await getLikesByMedia(item.media_id);
        if (likeArrayByMedia) {
          setLikes(likeArrayByMedia.length);
        }

      } catch (error) {
        console.log(error);
        setLikes(0);
      }
    };

    const fetchUserLikes = async (user)=> {
      try {
        console.log('fetchUserLikes');
        if(user){
          const userLikesArrayTemp = await getLikesByUser(user.user_id);

          if(userLikesArrayTemp.length > 0){
            setUserLikesArray(userLikesArray);
            console.log('userLikesArray: ',userLikesArray);

            //set like status ad like_id for this item
            const likeForThisItem = userLikesArray.find( (like) => {return (like.media_id === item.media_id)  }) ;
            if (likeForThisItem){
              setLikeIdThisItem(likeForThisItem.like_id);
              setUserLikesThis(true);

            } else {
              setUserLikesThis(false);
            }

          } else {
            console.log('fetchUserLikes like array length 0');
          }

        } else {
          console.log('fetchUserLikes for null user!');
        }

      } catch (error) {
        console.log(error);
        setLikes(0);
      }
    }

    fetchLikeCount();
    fetchUserLikes(user);
  }, []);


  const toggleLike = async ()=> {
    console.log('toggle like target: '+item.media_id+' user likes: '+userLikesThis );
    if (userLikesThis){
      //dislike
      if(await deleteLike(likeIdThisItem, localStorage.getItem("token"))){
        setUserLikesThis(false);
      }

    } else {
      //like this item
      if( await postLike(item.media_id, localStorage.getItem("token")) ){
        setUserLikesThis(true);
       }
    }


  }

  //no return for null user
  return user && (
    <div>
      <button onClick={toggleLike} className={userLikesThis ? "bg-red-500!" : "bg-green-500!"}>
        <div>Likes: {likes}</div>
        <div>{userLikesThis ? "Dislike" : "Like"}</div>
      </button>
    </div>
  );
};

export default Likes;
