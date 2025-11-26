import {useNavigate} from 'react-router';
import {useUser} from "../hooks/apiHooks.js";
import { useEffect, useState } from "react";
import { useUserContext } from "../hooks/contextHooks.js";
import { useLocation} from "react-router";

const Profile = () => {
  //const [user, setUser] = useState({});
  const {user} = useUserContext();
  const { getUserByToken } = useUser();






/* //Tätä ei käytetä jos user state tulee user contextin kautta
 useEffect(() => {
    const getUserData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const userResponse = await getUserByToken(token);
        //setUser(userResponse.user);
      }
    };
  }, [user]);*/


  //
  useEffect(() => {

  }, [user]);

  console.log('profile view with user: ', user);

  return (
    <div>
      Profile view...
      {user && <h2>{user.username}</h2>}
      {user && <div>{user.email}</div>}
      {user && <div>{user.created_at}</div>}
      {user && <div>User level: {user.level_name}</div>}

    </div>
  );
};

export default Profile;
