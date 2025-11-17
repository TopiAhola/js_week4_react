import MediaRow from "../components/MediaRow.jsx";
import SingleView from "../components/SingleView.jsx";

import {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router';
import {fetchData} from "../fetchData.js";



const Home = () => {
  //state
  const [selectedItem, setSelectedItem] = useState(null);
  const [mediaArray, setMediaArray] = useState([]);


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

      setMediaArray(newArray);
  }

  //Tätä ei käytetä...
  const addUserData = async () => {
    console.log('addUserData');

    //GET https://media2.edu.metropolia.fi/auth-api/api/v1/users/:id
    const newArray = await Promise.all(
      mediaArray.map(async (item) => {
        const result = await fetchData(
          'https://media2.edu.metropolia.fi/auth-api/api/v1/users/'+item.user_id
          //import.meta.env.VITE_MEDIA_API +'/users/' + item.id
        );
        console.log(result);
        return { ...item, username: result.username };
      })
    )

    setMediaArray(newArray);


  };

  useEffect(() => {
    try {
      getMedia().then(addUserData());
      //addUserData();
      console.log(mediaArray);

    } catch (error) {
      console.log(error);
    }
  }, []);

/*  useEffect(() => {
    try {
      addUserData();
      console.log(mediaArray);

    } catch (error) {
      console.log(error);
    }
  }, [mediaArray]);*/


  return (
    <>
      <h2>My Media</h2>
      <SingleView key='dialog' selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>User</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/*mappaa mediat*/}
          {mediaArray.map((item, index) => {
            return <MediaRow key={index} item={item} selectedItem={selectedItem} setSelectedItem={setSelectedItem}  />;
          })}
        </tbody>
      </table>
    </>
  );
};

export default Home;


/*
//removed mediaArray
const mediaArray = [
  {
    media_id: 8,
    user_id: 5,
    filename: "https://place-hold.it/1200x800.jpg&text=Pic1&fontsize=120",
    thumbnail: "http://place-hold.it/320/240.jpg&text=Thumb2&fontsize=20",
    filesize: 170469,
    media_type: "image/jpeg",
    title: "Picture 1",
    description: "This is a placeholder picture.",
    created_at: "2024-01-07T20:49:34.000Z",
  },
  {
    media_id: 9,
    user_id: 7,
    filename: "https://place-hold.it/800x600.jpg&text=Pic2&fontsize=72",
    thumbnail: "http://place-hold.it/320/240.jpg&text=Thumb3&fontsize=20",
    filesize: 1002912,
    media_type: "image/jpeg",
    title: "Pic 2",
    description: "",
    created_at: "2024-01-07T21:32:27.000Z",
  },
  {
    media_id: 17,
    user_id: 2,
    filename:
      "http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4",
    thumbnail: "http://place-hold.it/320/240.jpg&text=Thumb1&fontsize=20",
    filesize: 1236616,
    media_type: "video/mp4",
    title: "Bunny",
    description: "Butterflies fly around the bunny.",
    created_at: "2024-01-07T20:48:13.000Z",
  },
];
*/
