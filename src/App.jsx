import {BrowserRouter, Routes, Route} from 'react-router';

import Single from "./views/Single.jsx";
import Layout from "./components/Layout.jsx";
import Home from './views/Home.jsx';
import Upload from "./views/Upload.jsx";
import Profile from "./views/Profile.jsx";


const App = () => {
    return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>




        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />}/>
            <Route path="/upload" element={<Upload />} />
            {/*<Route path="/single" element={<Single/>} />*/}
          </Route>
        </Routes>
      </BrowserRouter>
    );
};
export default App;












/*
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    {/!* TODO: add missing routes *!/}
                    <Route path="/single" element={<Single />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

// Very simple view components
const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Users = () => <h2>Users Page</h2>;

export default App;
*/

