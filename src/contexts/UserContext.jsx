// UserContext.jsx
import { createContext, useState } from 'react';
import { useAuthentication, useUser } from '../hooks/apiHooks';
import { useNavigate } from 'react-router';
import { fetchData } from "../utils/fetchData.js";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const { postLogin } = useAuthentication();
  const { getUserByToken } = useUser();
  const navigate = useNavigate();


  // login, logout and autologin functions are here instead of components
  const handleLogin = async (credentials) => {
    try {

      //post login credentials to API
      const userInfo = await postLogin(credentials);

      //set token to local storage
      localStorage.setItem("token", JSON.stringify(userInfo.token));

      //set user to state
      setUser( userInfo.user);

      //navigate to home
      navigate("/");

    } catch (e) {
      console.log(e.message);
    }
  };

  const handleLogout = () => {
    try {
      // TODO: remove token from local storage
      // TODO: set user to null
      // TODO: navigate to home
    } catch (e) {
      console.log(e.message);
    }
  };

  // handleAutoLogin is used when the app is loaded to check if there is a valid token in local storage
  const handleAutoLogin = async () => {
    try {
      // TODO: get token from local storage
      // TODO: if token exists, get user data from API
      // TODO: set user to state
      // TODO: navigate to home
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <UserContext.Provider value={user, handleLogin}>
      {children}
    </UserContext.Provider>
  );
};
export { UserProvider, UserContext };
