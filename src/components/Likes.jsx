import { useEffect, useState } from "react";
import {useLike, useUser } from "../hooks/apiHooks.js";
import { useUserContext } from "../hooks/contextHooks.js";



const Likes = ({ item }) => {

  const {postLike, deleteLike, getLikesByMedia, getLikesByUser} = useLike();
  const { user } = useUserContext();

  //state
  const [likes, setLikes] = useState(0);
  const [userLikes, setUserLikes] = useState(false);
  const [userLikesId, setUserLikesId] = useState(0);


  useEffect(( ) => {
    const fetchLikeCount = async () => {
      try {
        const likeCount = await getLikesByMedia(item.media_id);
        if (Number.isInteger(likeCount)) {
          setLikes(likeCount);
        }
      } catch (error) {
        console.log(error);
        setLikes(0);
      }
    };

    const fetchUserLikes = async (user)=> {
      try {
        if(user !== null){
          const userLikesArray = await getLikesByUser(user.user_id);
          if(userLikesArray.length > 0){
            setUserLikesId(userLikesArray[0].media_id);
            console.log('fetchUserLikes like media_id:',userLikesId);

            //set like status for this item
            (userLikesId===item.media_id) ? setUserLikes(true) : setUserLikes(false);

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
    console.log('toggle like target: '+item.media_id+' user likes: '+userLikes );
    if (userLikes){
      //dislike

    } else {
      //like this item

    }


  }


  return (
    <div>
      <button onClick={toggleLike} className={userLikes ? "bg-red-500" : "bg-green-500"}>
        <div>Likes: {likes}</div>
        <div>{userLikes ? "Dislike" : "Like"}</div>
      </button>
    </div>
  );
};

export default Likes;
