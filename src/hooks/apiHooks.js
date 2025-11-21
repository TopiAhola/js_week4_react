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
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    const tokenResult = fetchData(
      "https://media2.edu.metropolia.fi/auth-api/api/v1/users/token",
      options
    );
    return tokenResult;
  };

  const postUser = async (user) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };

    const postResult = fetchData(
      "https://media2.edu.metropolia.fi/auth-api/api/v1/users/token",
      options
    );
    return postResult;
  };
  return { getUserByToken, postUser };
};

const useFile = () => {
  const postFile = async (file, token) => {
    //create FormData object
    const formData = new FormData();

    //add file to FormData
    formData.append("file", file);

    //upload the file to file server and get the file data (url = import.meta.env.VITE_UPLOAD_SERVER + '/upload')
    const uploadApi =
      "https://media2.edu.metropolia.fi/upload-api/api/v1/upload";
    const options = {
      method: "POST",
      headers: {
        /*ContentType: "multipart/form-data",*/
        Authorization: "Bearer "+token.replaceAll('"','')
      },
      body: formData,
    };

    console.log("postFile:" + uploadApi + " " + options);
    console.log(options);
    const uploadResponse = await fetch(uploadApi, options);
    console.log(uploadResponse);

    // return the file data.
    return uploadResponse.data;
  };

  const postMedia = async (file, inputs, token) => {
    const mediaApi = 'https://media2.edu.metropolia.fi/media-api/api/v1/media'
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer "+token.replaceAll('"','')
      },
      body: JSON.stringify({...inputs,
        filename: file.name,
        media_type: file.type,
        filesize: file.size,

      }) //puretaan milemmat objektit
    };

    console.log("postMedia:" + mediaApi + " " + options);

    console.log(options);
    const postMediaResult = await fetchData(
      mediaApi,
      options
    );
    return postMediaResult;
  };

  return { postFile, postMedia };
};




export {useMedia, useAuthentication, useUser, useFile};
