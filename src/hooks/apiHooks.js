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
    const loginResult = await fetchData("https://media2.edu.metropolia.fi/restaurant/api/v1/auth/login", fetchOptions);  //import.meta.env.VITE_AUTH_API + '/auth/login'
    return loginResult;
  };

  return {postLogin};

};

export {useMedia, useAuthentication};
