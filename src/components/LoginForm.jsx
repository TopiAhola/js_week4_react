import React from "react";
import useForm from '../hooks/formHooks.js'
import { useAuthentication } from "../hooks/apiHooks.js";
import { useUserContext } from "../hooks/contextHooks.js";
import {useNavigate} from "react-router";

// LoginForm.jsx
const LoginForm = () => {

  //const {postLogin} = useAuthentication();
  //korvataan tällä:
  const { handleLogin } = useUserContext();

  //const  navigate  = useNavigate();

  const initValues = {
    username: '',
    password: '',
  };

  //callback funktio useFormille
  const doLogin = async (inputData) => {
    console.log(inputData);
    await handleLogin(inputData);  //tarvitaanko paluuarvoa jos state saadaan contextin kautta?

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
