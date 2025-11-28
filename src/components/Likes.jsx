import { useEffect, useState } from "react";
import {useLike, useUser } from "../hooks/apiHooks.js";
import { useUserContext } from "../hooks/contextHooks.js";



const Likes = ({ item }) => {

  const {postLike, deleteLike, getLikesByMedia, getLikesByUser} = useLike();
  const { user } = useUserContext();

  //state
  const [likes, setLikes] = useState(0);
  const [userLikes, setUserLikes] = useState(false);



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
          const userLikesId = await getLikesByUser(user.user_id);
          console.log('fetchUserLikes like value:',userLikesId);
          setUserLikes(userLikesId)
        }
      } catch (error) {
        console.log(error);
        setLikes(0);
      }
    }

    fetchLikeCount();
    fetchUserLikes(user);
  }, []);


  return (
    <div>
      <button onClick={() => {}} className={userLikes ? "bg-red-500" : "bg-green-500"}>
        <div>Likes: {likes}</div>
        <div>{userLikes ? "Dislike" : "Like"}</div>
      </button>
    </div>
  );
};

export default Likes;
