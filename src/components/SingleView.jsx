import React from "react";

const SingleView = (props) => {
  const {selectedItem, setSelectedItem  }= props;

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


  return (
    selectedItem && (
      <dialog open={selectedItem}>
        <div>
          {VideoOrImage(selectedItem)}
          <p>{selectedItem.title}</p>
          <p>{selectedItem.description}</p>
          <p>{new Date(selectedItem.created_at).toLocaleString("fi-FI")}</p>
          <p>{selectedItem.filesize}</p>
          <p>{selectedItem.media_type}</p>

          <button onClick={(event)=> {
            console.log(event);
            setSelectedItem(null);
          }}> Close </button>
        </div>
      </dialog>
    )
  );
};

export default SingleView;
