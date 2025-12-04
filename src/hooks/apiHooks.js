import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData.js";

const useMedia = () => {
  //media state
  const [mediaArray, setMediaArray] = useState([]);

  const deleteMedia = async (media_id, token) => {
    try {
      const deleteOptions = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token.replaceAll('"', ""),
        },
      };
      const deleteResult = await fetchData(
        import.meta.env.VITE_MEDIA_API + "/media/" + media_id,
        deleteOptions
      );

      if (deleteResult) {
        console.log(deleteResult);
        if (deleteResult.message === "Media item deleted") {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  /**
   *
   * @param media_id
   * @param title
   * @param description
   * @param token
   * @returns {Promise<any>} {"message": "Media updated"}
   */
  const modifyMedia = async (media_id, title, description, token) => {
    console.log("modifyMedia:", media_id, title, description, token);

    const modifyOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token.replaceAll('"', ""),
      },
      body: JSON.stringify({ title: title, description: description }),
    };

    const modifyResult = await fetchData(
      import.meta.env.VITE_MEDIA_API + "/media/" + media_id,
      modifyOptions
    );

    console.log(modifyResult);
    return modifyResult;
  };

  return { mediaArray, setMediaArray, deleteMedia, modifyMedia };
};

const useAuthentication = () => {
  const postLogin = async (inputs) => {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    };
    const loginResult = await fetchData(
      "https://media2.edu.metropolia.fi/auth-api/api/v1/auth/login",
      fetchOptions
    ); //import.meta.env.VITE_AUTH_API + '/auth/login'
    return loginResult;
  };

  return { postLogin };
};

const useUser = () => {
  //hakee käyttäjätiedot tokenin perusteella
  const getUserByToken = async (token) => {
    const options = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token.replaceAll('"', ""), //tokenissa on lainausmerkit...
      },
    };

    const tokenResult = await fetchData(
      "https://media2.edu.metropolia.fi/auth-api/api/v1/users/token",
      options
    );
    console.log(tokenResult);
    return tokenResult.user;
  };

  const postUser = async (user) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };

    const postResult = await fetchData(
      "https://media2.edu.metropolia.fi/auth-api/api/v1/users/",
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
        Authorization: "Bearer " + token.replaceAll('"', ""),
      },
      body: formData,
    };

    console.log("postFile:" + uploadApi + " " + options);
    console.log(options);
    const uploadResponse = await fetch(uploadApi, options);
    const responseBody = await uploadResponse.json();
    console.log(responseBody);
    console.log(responseBody.message);

    // return the file data.
    return responseBody;
  };

  const postMedia = async (file, inputs, token, postFileResponse) => {
    const mediaApi = "https://media2.edu.metropolia.fi/media-api/api/v1/media";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token.replaceAll('"', ""),
      },
      body: JSON.stringify({
        ...inputs,
        filename: postFileResponse.filename,
        media_type: postFileResponse.media_type,
        filesize: postFileResponse.filesize,
      }), //puretaan milemmat objektit
    };

    console.log("postMedia:" + mediaApi + " " + options);

    console.log(options);
    const postMediaResult = await fetchData(mediaApi, options);
    return postMediaResult;
  };

  return { postFile, postMedia };
};

/**
 *
 * @return {{postLike: (function(*, *): Promise<any>), deleteLike: (function(*, *): Promise<any>), getLikesByMedia: (function(*): Promise<any>), getLikesByUser: (function(*): Promise<any>)}}
 */
const useLike = () => {
  /**
   *
   * @param media_id
   * @param token
   * @return {Promise<any>} {"message": "Like added"}
   */
  const postLike = async (media_id, token) => {
    const options = {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token.replaceAll('"', ""),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ media_id: media_id }),
    };

    const postResult = await fetchData(
      "https://media2.edu.metropolia.fi/media-api/api/v1/likes/",
      options
    );
    return postResult;
  };

  /**
   *
   * @param like_id
   * @param token
   * @return {Promise<any>} {"message": "Like deleted"}
   */
  const deleteLike = async (like_id, token) => {
    try {
      const options = {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token.replaceAll('"', ""),
        },
      };

      const deleteResult = await fetchData(
        "https://media2.edu.metropolia.fi/media-api/api/v1/likes/" + like_id,
        options
      );

      return deleteResult.ok;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  /**
   * @param media_id
   * @returns {Promise<*>} [{ "like_id": 1,
   *     "media_id": 1,
   *     "user_id": 1,
   *     "created_at": "2024-01-26T09:38:08.000Z"
   *   }]
   */
  const getLikesByMedia = async (media_id) => {
    try {
      const options = {
        method: "GET",
        headers: {},
      };

      const likeArray = await fetchData(
        "https://media2.edu.metropolia.fi/media-api/api/v1/likes/bymedia/" +
          media_id,
        options
      );
      return likeArray;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  /**
   * @param token
   * @returns {Promise<*>} [ { "like_id": 1,
   *     "media_id": 1,
   *     "user_id": 1,
   *     "created_at": "2024-01-26T09:38:08.000Z"
   *   } ]
   */
  const getLikesByUser = async (token) => {
    try {
      const options = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token.replaceAll('"', ""),
        },
      };

      const likeArray = await fetchData(
        "https://media2.edu.metropolia.fi/media-api/api/v1/likes/byuser/",
        options
      );
      return likeArray;

    } catch (error) {
      console.log(error);
      return [];
    }
  };

  return { postLike, deleteLike, getLikesByMedia, getLikesByUser };
};

export { useMedia, useAuthentication, useUser, useFile, useLike };
