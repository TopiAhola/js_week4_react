import { useEffect, useState } from "react";
import getMedia from "../utils/getMedia.js";

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

export default useMedia;
