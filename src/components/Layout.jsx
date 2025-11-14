import App from "../App.jsx";
import {Link, useNavigate} from 'react-router';


const Layout = () => {

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/single">Single</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default Layout;
