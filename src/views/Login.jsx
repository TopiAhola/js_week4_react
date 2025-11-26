import React, { useState } from "react";
import LoginForm from "../components/LoginForm.jsx";
import RegisterForm from '../components/RegisterForm.jsx'

const Login = () => {

  const [showLogin, setshowLogin] = useState(true);

  return (
    <div>
      {showLogin ? <LoginForm/> : <RegisterForm/> }
      <button onClick={() => setshowLogin(!showLogin)}> {showLogin ? 'Not a user? Register' : 'Already a user? Login'} </button>
    </div>
  );
};

export default Login;
