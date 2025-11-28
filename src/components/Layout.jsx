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
      <nav className="[&>*]:bg-blue-400 w-auto" >
        <ul className="flex bg-red-500  [&_*]:hover:bg-blue-800 " >
          <li>
            <Link to="/" >Home</Link>
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

          <li className="[&,&_*]:hover:bg-red-500!">
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
