import {useNavigate} from 'react-router';
import { useState } from "react";
import useForm from "../hooks/formHooks.js";
import { useFile } from "../hooks/apiHooks.js";

const Upload = ()=>{

  const navigate = useNavigate();

  const initState = {
    title:'', description:''
  };

  const [file, setFile] = useState(null);

  const token = localStorage.getItem('token');

  const handleFileChange = (evt) => {
    if (evt.target.files) {
      //.files toimii vain Reactissa?
      //set the file to state
      setFile(evt.target.files[0]);
      console.log(evt.target.files[0]);
    }
  };

  const {postFile, postMedia} = useFile();

  //callback for handleSubmit
  const doUpload = async (inputs) => {
    console.log('doUpload'+inputs +file  );
    try {
      //call postFile function (see below)  APIhooks
      const postFileResponse = await postFile(file,token);
      console.log(postFileResponse);

      //call postMedia function (see below)
      const postMediaResponse = await postMedia(file, inputs, token, postFileResponse.data);
      console.log(postMediaResponse);

      if(postFileResponse.message === "file uploaded" && postMediaResponse.message === "Media updated"){
        console.log('upload success', postFileResponse.message, postMediaResponse.message);
        alert('Upload success.');
      } else {
        console.log('upload failed', postFileResponse.message, postMediaResponse.message);
        alert('Upload failed: '+postFileResponse.message+' '+postMediaResponse.message);
      }

      //redirect to Home
      navigate("/");

    } catch (e) {
      console.log(e.message);
    }
  };

  const {handleInputChange, handleSubmit, inputs} = useForm(doUpload, initState);

  return (
    <>
      <h1>Upload</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            type="text"
            id="title"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            rows={5}
            id="description"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="file">File</label>
          <input
            name="file"
            type="file"
            id="file"
            accept="image/*, video/*"
            onChange={handleFileChange}
          />
        </div>
        <img
          src={
            file
              ? URL.createObjectURL(file)
              : "./src/assets/placeholder.bmp"
          }
          alt="preview"
          width="200"
        />
        <button
          type="submit"
          disabled={file && inputs.title.length > 3 ? false : true}
        >
          Upload
        </button>
      </form>
    </>
  );
}

export default Upload;
