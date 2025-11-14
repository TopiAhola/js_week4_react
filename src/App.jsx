import {BrowserRouter, Routes, Route, Link} from 'react-router';
import Single from "./views/Single.jsx";
import Layout from "./components/Layout.jsx";


import Home from './views/Home.jsx';


const App = () => {
    return (
        <>
          <></>
            <h1>My App</h1>
            <Home />

        </>
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

