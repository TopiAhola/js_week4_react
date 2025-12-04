import MediaRow from "../components/MediaRow.jsx";
import SingleView from "../components/SingleView.jsx";
import { useMedia } from "../hooks/apiHooks.js";
import EditDialog from "../components/EditDialog.jsx";

import {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router';
import {getMedia, getMediaLocalTest} from "../utils/getMedia.js";



const Home = () => {
  //state
  const [selectedItem, setSelectedItem] = useState(null);
  const [editItem, setEditItem] = useState(null);

  const { mediaArray, setMediaArray, deleteMedia, modifyMedia } = useMedia();

  useEffect( () => {
    try {
      getMediaLocalTest().then(
        (array) => {
          if (array.length !== mediaArray.length) {
            setMediaArray(array);
          } else {
            console.log('mediaArray is unchanged');
          }

        },
        (error) => {
          console.log(error);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }, []);


  return (
    <>
      <h2 className="relative top-0 w-fit h-auto py-4 justify-left flex bg-gradient-to-r from-blue-400 via-white-500 to-red-500 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
        My Media
      </h2>
      <SingleView key='dialog' selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
      <EditDialog key='editDialog' item={editItem} modifyMedia={modifyMedia} setEditItem={setEditItem}
      ></EditDialog>

      <table className="table-auto bg-black
      [&_td]:border [&_td]:border-grey-400 [&_td]:px-4 [&_td]:py-1
      [&_button]:bg-gray-800 [&_button]:border [&_button]:m-1 [&_button]:rounded-md [&_button]:px-2 [&_button]:py-2
      ">

        <thead className="bg-blue-400">
          <tr className="">
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
            return <MediaRow key={index}
                             item={item}
                             selectedItem={selectedItem}
                             setSelectedItem={setSelectedItem}
                             setEditItem={setEditItem}

            />;
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
