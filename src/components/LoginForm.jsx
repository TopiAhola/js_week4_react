import React from "react";
import useForm from '../hooks/formHooks.js'
import { useAuthentication } from "../hooks/apiHooks.js";

// LoginForm.jsx
const LoginForm = () => {

  const {postLogin} = useAuthentication();

  const initValues = {
    username: '',
    password: '',
  };

  //callback funktio useFormille
  const doLogin = async (inputData) => {
    console.log(inputData);
    const loginResult = await postLogin(inputData);
    console.log(loginResult);
  }

  const {inputs, handleInputChange, handleSubmit} = useForm(doLogin, initValues);



  return (
    <>
      <h1>Login</h1>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="loginuser">Username</label>
          <input
            name="username"
            type="text"
            id="loginuser"
            onChange={ handleInputChange }
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="loginpassword">Password</label>
          <input
            name="password"
            type="password"
            id="loginpassword"
            onChange={ handleInputChange }
            autoComplete="current-password"
          />
        </div>
        <button type="submit" >Login</button>
      </form>
    </>
  );
};

export default LoginForm;
