import React, { useState } from "react";
import LoginForm from "../components/LoginForm.jsx";
import RegisterForm from '../components/RegisterForm.jsx'

const Login = () => {

  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="flex flex-col justify-center">
      {showLogin ? <LoginForm showLogin={showLogin} setShowLogin={setShowLogin}/>
        : <RegisterForm showLogin={showLogin} setShowLogin={setShowLogin}/> }

    </div>
  );
};

export default Login;
