import React from "react";
import useForm from '../hooks/formHooks.js';
import {useNavigate} from "react-router";


const EditDialog = ({item, modifyMedia, setEditItem}) => {

  function VideoOrImage (selectedItem) {
    if (selectedItem.media_type === "video/mp4") {
      return (
        <figure>
          <video autoPlay src={selectedItem.filename} />
          <figcaption> Video </figcaption>
        </figure>
      );
    } else if (selectedItem.media_type === "image/jpeg") {
      return (
        <figure>
          <img src={selectedItem.thumbnail} alt={selectedItem.title} />
          <figcaption> Image </figcaption>
        </figure>
      );
    }
  }

  const navigate = useNavigate();
  const initValues = {title: '', description: ''};

  //form jossa editoida mediaa
  const handleEditForm = async ({title, description }) => {
    console.log("handleEditForm: " + inputs);
    const modifyResult = await modifyMedia(item.media_id, title, description, localStorage.getItem('token'));
    modifyResult ? alert(modifyResult.message) : alert('Error updating media.');

    navigate('/');
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(handleEditForm, initValues);

  return (
    item && (
      <dialog open className="bg-blue-600 border-amber-400 border-4">
        <div className="">
          <h2 className="font-extrabold">Edit Media</h2>

          <div>
            <h3>Media Item</h3>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>{new Date(item.created_at).toLocaleString("fi-FI")}</p>
            <p>{item.filesize}</p>
            <p>{item.media_type}</p>
          </div>
          {VideoOrImage(item)}
        </div>

        <div>
          <h3>New values</h3>
          <form onSubmit={ handleSubmit }>
            <div>
              <label htmlFor="new_title">Title</label>
              <input
                name="title"
                type="text"
                id="new_title"
                onChange={ handleInputChange }
                autoComplete="off"
                placeholder={item.title}
              />
            </div>
            <div>
              <label htmlFor="new_description">Description</label>
              <input
                name="description"
                type="text"
                id="new_description"
                onChange={ handleInputChange }
                autoComplete="off"
                placeholder={item.description}
              />
            </div>
            <button type="submit" >Update</button>
          </form>

          <button onClick={() => setEditItem(null)}>Close</button>
        </div>




      </dialog>
    )
  );
};

export default EditDialog;
