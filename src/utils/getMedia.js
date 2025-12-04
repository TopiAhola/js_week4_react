'use strict';

import {fetchData} from "./fetchData.js";


const getMedia = async () => {
  try {
    console.log("getMedia");
    const json = await fetchData(import.meta.env.VITE_MEDIA_API + "/media");

    //GET https://media2.edu.metropolia.fi/auth-api/api/v1/users/:id
    const newArray = await Promise.all(
      json.map(async (item) => {
        const result = await fetchData(
          "https://media2.edu.metropolia.fi/auth-api/api/v1/users/" +
            item.user_id
          //import.meta.env.VITE_MEDIA_API +'/users/' + item.id
        );

        //console.log(result);

        return { ...item, username: result.username };
      })
    );
    return newArray;

  } catch (error) {
    console.log(error);
    return [
      {
        "media_id": 73,
        "user_id": 7,
        "filename": "//localhost:3002/uploads/example.png",
        "filesize": 1256723,
        "media_type": "image/png",
        "title": "Example Title",
        "description": "Example Description",
        "created_at": "2024-01-26T09:38:08.000Z",
        "thumbnail": "//localhost:3002/uploads/example-thumb.png"
      },
      {
        "media_id": 74,
        "user_id": 635,
        "filename": "//localhost:3002/uploads/example.png",
        "filesize": 1256723,
        "media_type": "image/png",
        "title": "Example Title",
        "description": "Example Description",
        "created_at": "2024-01-26T09:38:08.000Z",
        "thumbnail": "//localhost:3002/uploads/example-thumb.png"
      }

    ];
  }
};

const getMediaLocalTest = async ()=>{
  return [
    {
      media_id: 73,
      user_id: 7,
      filename: "//localhost:3002/uploads/example.png",
      filesize: 1256723,
      media_type: "image/png",
      title: "Example Title",
      description: "Example Description",
      created_at: "2024-01-26T09:38:08.000Z",
      thumbnail: "//localhost:3002/uploads/example-thumb.png",
    },
    {
      "media_id": 73,
      "user_id": 635,
      "filename": "//localhost:3002/uploads/example.png",
      "filesize": 1256723,
      "media_type": "image/png",
      "title": "Example Title",
      "description": "Example Description",
      "created_at": "2024-01-26T09:38:08.000Z",
      "thumbnail": "//localhost:3002/uploads/example-thumb.png"
    }
  ];

}


export {getMedia, getMediaLocalTest};
