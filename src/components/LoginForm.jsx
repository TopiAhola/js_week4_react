import React from "react";
import useForm from "../hooks/formHooks.js";
import { useAuthentication } from "../hooks/apiHooks.js";
import { useUserContext } from "../hooks/contextHooks.js";
import { useNavigate } from "react-router";

// LoginForm.jsx
const LoginForm = ({ showLogin, setShowLogin }) => {
  //const {postLogin} = useAuthentication();
  //korvataan tällä:
  const { handleLogin } = useUserContext();

  //const  navigate  = useNavigate();

  const initValues = {
    username: "",
    password: "",
  };

  //callback funktio useFormille
  const doLogin = async (inputData) => {
    console.log(inputData);
    await handleLogin(inputData); //tarvitaanko paluuarvoa jos state saadaan contextin kautta?
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(
    doLogin,
    initValues
  );

  return (
    <>
      <h2 className="relative top-0 w-fit h-auto py-4 justify-left flex bg-gradient-to-r from-blue-400 via-white-500 to-red-500 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
        Login
      </h2>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-blue-400 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="loginuser">Username</label>
              <input
                name="username"
                type="text"
                id="loginuser"
                onChange={handleInputChange}
                autoComplete="username"
              />
            </div>
            <div>
              <label htmlFor="loginpassword">Password</label>
              <input
                name="password"
                type="password"
                id="loginpassword"
                onChange={handleInputChange}
                autoComplete="current-password"
              />
            </div>
            <button type="submit">Login</button>
          </form>

          <button onClick={() => setShowLogin(!showLogin)} className="w-fit">
            {showLogin ? "Not a user? Register" : "Already a user? Login"}
          </button>

        </div>
      </div>
    </>
  );
};

export default LoginForm;
