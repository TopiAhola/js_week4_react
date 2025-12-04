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
      <dialog open className="border-red-400 bg-black border-4 m-4 p-4 w-auto text-white
      [&_button]:bg-gray-800 [&_button]:border [&_button]:m-1 [&_button]:rounded-md [&_button]:px-2 [&_button]:py-2
      [&_button]:hover:bg-white [&_button]:hover:text-black [&_button]:hover:border-black
      ">
        <div className="">

          <h2 className="text-6xl font-extrabold relative top-0 w-fit h-auto py-4 justify-left flex text-blue-400">
            Edit Media
          </h2>

          <div className="bg-gray-800 h-2" >
            {VideoOrImage(item)}
          </div>

          <dl className="[&_dt]:text-blue-400 divide-y divide-gray-300 [&_dd]:text-white
                  [&>div]:flex-col [&>div]:p-3
                  ">
            <div>
              <dt>Title</dt>
              <dd>{item.title}</dd>
            </div>

            <div>
              <dt>User</dt>
              <dd>{item.username}</dd>
            </div>

            <div>
              <dt>Description</dt>
              <dd>{item.description}</dd>
            </div>

            <div>
              <dt>Created At</dt>
              <dd>{new Date(item.created_at).toLocaleString("fi-FI")}</dd>
            </div>

            <div>
              <dt>Filesize</dt>
              <dd>{item.filesize}</dd>
            </div>

            <div>
              <dt>Media Type</dt>
              <dd>{item.media_type}</dd>
            </div>
          </dl>

        <div className=" [&_*]:p-2  [&_*]:divide-gray-300 top-6">
          <h3 className="text-blue-400 font-extrabold text-xl">
            New values
          </h3>
          <form onSubmit={ handleSubmit } className="[&_input]:border [&_input]:border-white [&_input]:block">
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
                className="w-full"
              />
            </div>
            <button type="submit" >Update</button>
          </form>
          <button onClick={() => setEditItem(null)}>Close</button>
        </div>

        </div>
      </dialog>
    )
  );
};

export default EditDialog;
