import React from "react";
import useForm from '../hooks/formHooks.js'
import { useUser } from "../hooks/apiHooks.js";
import { useNavigate } from "react-router";

const RegisterForm = () => {

  const  navigate  = useNavigate();
  const {postUser} = useUser();
  const initValues = {
    username: '',
    emai: '',
    password: '',
  };

  //callback funktio useFormille
  const doRegister = async (inputData) => {
    console.log(inputData);
    const loginResult = await postUser(inputData);

    console.log(loginResult);
    const token = loginResult.token;

    localStorage.setItem("token", token);
    navigate('/login');
    //älä kirjaa käyttäjätietoja tuotannossa!
  }

  //
  const {inputs, handleInputChange, handleSubmit} = useForm(doRegister, initValues);

  return (
    <div>
      <h1>Register</h1>
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
          <label htmlFor="register_email">Email</label>
          <input
            name="email"
            type="text"
            id="register_email"
            onChange={ handleInputChange }
            autoComplete="email"
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





