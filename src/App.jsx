import { BrowserRouter, Routes, Route, Form } from "react-router";

import Single from "./views/Single.jsx";
import Layout from "./components/Layout.jsx";
import Home from './views/Home.jsx';
import Upload from "./views/Upload.jsx";
import Profile from "./views/Profile.jsx";
import Forms from "./components/Forms.jsx";
import Logout from "./views/Logout.jsx";
import Login from "./views/Login.jsx";

import { UserProvider } from './contexts/UserContext.jsx';
import ProtectedRoute from "./components/ProtectedRoute.jsx";

const App = () => {
    return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <UserProvider>

        <Routes>
          <Route element={<Layout />}>
            <Route path="" element={<Home />} />

            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile/>
              </ProtectedRoute>}
            />

            <Route path="/upload" element={
              <ProtectedRoute>
                <Upload/>
              </ProtectedRoute>}
            />

            <Route path="/single" element={<Single />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
          </Route>
        </Routes>

      </UserProvider>
      </BrowserRouter>
    );
};
export default App;
