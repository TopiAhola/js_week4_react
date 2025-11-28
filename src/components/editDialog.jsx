import React from "react";



const EditDialog = ({item, modifyMedia, setEditItem}) => {

  function VideoOrImage (selectedItem) {
    if (selectedItem.media_type === 'video/mp4') {
      return ( <figure>
        <video autoPlay src={selectedItem.filename}/>
        <figcaption> Video </figcaption>
      </figure>)

    } else if (selectedItem.media_type === 'image/jpeg') {
      return ( <figure>
        <img src={selectedItem.thumbnail} alt={selectedItem.title} />
        <figcaption> Image </figcaption>
      </figure> )
    }
  }

  //TODO: form jossa editoida mediaa
  const handleEditForm = () => {
    console.log('handleEditForm');

  };

  return (
    item && (
      <dialog open
              className="bg-blue-600 border-amber-400 border-4      "
      >
        <div className="">
          <h2 className="font-extrabold">Edit Media</h2>

          <form onSubmit={handleEditForm}>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>{new Date(item.created_at).toLocaleString("fi-FI")}</p>
            <p>{item.filesize}</p>
            <p>{item.media_type}</p>
          </form>
          {VideoOrImage(item)}

          <button onClick={() => setEditItem(null)}>Close</button>
        </div>
      </dialog>
    )
  );
};

export default EditDialog;
