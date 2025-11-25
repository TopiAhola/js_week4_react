import React from "react";
import useForm from '../hooks/formHooks.js'
import { useAuthentication } from "../hooks/apiHooks.js";

const RegisterForm = () => {


  const {postLogin} = useAuthentication();  //TODO:: postUser ?

  const initValues = {
    username: '',
    password: '',
  };

  //callback funktio useFormille
  const doRegister = async (inputData) => {
    console.log(inputData);
    const loginResult = await postLogin(inputData);

    console.log(loginResult);
    const token = loginResult.token;   //TODO: automaattinen kirjautuminen?

    localStorage.setItem("token", token);

    //älä kirjaa käyttäjätietoja tuotannossa!
  }

  //
  const {inputs, handleInputChange, handleSubmit} = useForm(doRegister, initValues);

  return (
    <div>
      <h1>Registe</h1>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="register_user">Username</label>
          <input
            name="username"
            type="text"
            id="register_user"
            onChange={ handleInputChange }
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="register_password">Password</label>
          <input
            name="password"
            type="password"
            id="register_password"
            onChange={ handleInputChange }
            autoComplete="current-password"
          />
        </div>
        <button type="submit" >Register</button>
      </form>
    </div>

  );
};

export default RegisterForm;





