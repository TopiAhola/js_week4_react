import App from "../App.jsx";
import { Link, Outlet, } from "react-router";
import { useUserContext } from "../hooks/contextHooks.js";


const Layout = () => {

  const  {handleLogin, handleAutoLogin } = useUserContext();
  handleAutoLogin();

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/profile">Profile</Link>
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
