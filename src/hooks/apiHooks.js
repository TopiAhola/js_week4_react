import { useEffect, useState } from "react";
import getMedia from "../utils/getMedia.js";
import { fetchData } from "../utils/fetchData.js";


const useMedia = () => {

  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    try {
      getMedia().then(
        (array) => {
          setMediaArray(array);
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  return  {mediaArray} ;
};

const useAuthentication = () => {
  const postLogin = async (inputs) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };
    const loginResult = await fetchData("https://media2.edu.metropolia.fi/auth-api/api/v1/auth/login", fetchOptions);  //import.meta.env.VITE_AUTH_API + '/auth/login'
    return loginResult;
  };

  return {postLogin};

};

const useUser = () => {
  //hakee käyttäjätiedot tokenin perusteella
  const getUserByToken = async (token) => {
    const options = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer '+token
      }
    }

    const tokenResult = fetchData(
      'https://media2.edu.metropolia.fi/auth-api/api/v1/users/token',
      options
    );
    return tokenResult;
  }

  const postUser = async (user) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }

    const postResult = fetchData(
      'https://media2.edu.metropolia.fi/auth-api/api/v1/users/',
      options
    );
    return postResult;

  }




  return {getUserByToken, postUser}
}


export {useMedia, useAuthentication, useUser};
