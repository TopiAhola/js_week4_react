// UserContext.jsx
import { createContext, useState } from 'react';
import { useAuthentication, useUser } from '../hooks/apiHooks';
import { useLocation, useNavigate } from 'react-router';


const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const { postLogin } = useAuthentication();
  const { getUserByToken } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

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
      // remove token from local storage
      localStorage.removeItem("token");

      // set user to null
      setUser(null);

      // navigate to home
      navigate("/");
      console.log('Logged out..');

    } catch (e) {
      console.log(e.message);
    }
  };

  // handleAutoLogin is used when the app is loaded to check if there is a valid token in local storage
  const handleAutoLogin = async () => {
    try {

      //get token from local storage
      const token = localStorage.getItem("token");

      //if token exists, get user data from API
      if(token){
        const userByToken = await getUserByToken(token);

        //set user to state
        if (userByToken) {
          setUser(userByToken);
        }

      } else {
        console.log('No token');
      }

      //navigate to
      console.log('Naviage to: '+location.pathname);
      navigate(location.pathname);

    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <UserContext.Provider value={ {user, handleLogin, handleLogout, handleAutoLogin} }>
      {children}
    </UserContext.Provider>
  );
};
export { UserProvider, UserContext };
