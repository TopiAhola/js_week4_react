import React from "react";
import useForm from "../hooks/formHooks.js";
import { useUser } from "../hooks/apiHooks.js";
import { useNavigate } from "react-router";

const RegisterForm = ({ showLogin, setShowLogin }) => {
  const navigate = useNavigate();
  const { postUser } = useUser();
  const initValues = {
    username: "",
    emai: "",
    password: "",
  };

  //callback funktio useFormille
  const doRegister = async (inputData) => {
    console.log(inputData);
    const loginResult = await postUser(inputData);

    console.log(loginResult);
    const token = loginResult.token;

    localStorage.setItem("token", token);
    navigate("/login");
    //älä kirjaa käyttäjätietoja tuotannossa!
  };

  //
  const { inputs, handleInputChange, handleSubmit } = useForm(
    doRegister,
    initValues
  );

  return (
    <div>
      <h2 className="relative top-0 w-fit h-auto py-4 justify-left flex bg-gradient-to-r from-blue-400 via-white-500 to-red-500 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
        Register
      </h2>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-blue-400 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="register_user">Username</label>
              <input
                name="username"
                type="text"
                id="register_user"
                onChange={handleInputChange}
                autoComplete="username"
              />
            </div>
            <div>
              <label htmlFor="register_email">Email</label>
              <input
                name="email"
                type="text"
                id="register_email"
                onChange={handleInputChange}
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="register_password">Password</label>
              <input
                name="password"
                type="password"
                id="register_password"
                onChange={handleInputChange}
                autoComplete="current-password"
              />
            </div>
            <button type="submit">Register</button>
          </form>

          <button onClick={() => setShowLogin(!showLogin)} className="w-fit">
            {showLogin ? "Not a user? Register" : "Already a user? Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
