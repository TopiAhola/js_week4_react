import App from "../App.jsx";
import { Link, Outlet, } from "react-router";
import { useUserContext } from "../hooks/contextHooks.js";
import { useEffect } from "react";


const Layout = () => {

  const  {handleLogin, handleAutoLogin } = useUserContext();
  const { user } = useUserContext();

  useEffect(
    () => { handleAutoLogin(); },
    [user]
  );


  return (
    <div>
      <nav className="bg-amber-300">
        <ul className="flex *:hover:bg-blue-600  ">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/profile" >Profile</Link>
          </li>

          <li>
            <Link to="/upload">Upload</Link>
          </li>

          <li>
            <Link to="/forms">Forms</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>

          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>

      <main>
        <Outlet />
      </main>

    </div>
  );
};

export default Layout;
