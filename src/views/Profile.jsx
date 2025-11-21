import {useNavigate} from 'react-router';
import {useUser} from "../hooks/apiHooks.js";
import { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({});
  const { getUserByToken } = useUser();

  useEffect(() => {
    const getUserData = async () => {
      const token = localStorage.getItem("token");
      const userResponse = await getUserByToken(token);
      setUser(userResponse.user);
    };
    getUserData();

  }, []);


  return (
    <div>
      Profile view...
      {user && <h2>{user.username}</h2>}
    </div>
  );
};

export default Profile;
