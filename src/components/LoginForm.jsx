import React from "react";
import { useState } from "react";

// LoginForm.jsx
const LoginForm = () => {

  const initValues = {
    username: '',
    password: '',
  };

  const [inputs, setInputs] = useState(initValues);

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }

    //callback();
  };

  const handleInputChange = (event) => {
    event.persist();
    console.log(event.target.name, event.target.value);
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={ () => {} }>
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
        <button type="submit" onSubmit={handleSubmit}>Login</button>
      </form>
    </>
  );
};

export default LoginForm;
