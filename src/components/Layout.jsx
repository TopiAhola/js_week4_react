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
    <div className="[&_button]:bg-gray-800 [&_button]:border [&_button]:m-1 [&_button]:rounded-md [&_button]:px-2 [&_button]:py-2">
      <nav className="[&>*]:bg-blue-400 w-auto [&_li]:m-0 [&_li]:p-4" >
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

      <main className="bg-black ">
        <Outlet />
      </main>

    </div>
  );
};

export default Layout;
