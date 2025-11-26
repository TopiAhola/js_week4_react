'use strict';

import {fetchData} from "./fetchData.js";


import SingleView from "../components/SingleView.jsx";

const getMedia = async () => {
  const json = await fetchData(import.meta.env.VITE_MEDIA_API + "/media");

  //GET https://media2.edu.metropolia.fi/auth-api/api/v1/users/:id
  const newArray = await Promise.all(
    json.map(async (item) => {
      const result = await fetchData(
        'https://media2.edu.metropolia.fi/auth-api/api/v1/users/'+item.user_id
        //import.meta.env.VITE_MEDIA_API +'/users/' + item.id
      );
      console.log(result);
      return { ...item, username: result.username };
    })
  )

  return newArray;
}

export default getMedia;
