import React from "react";



const EditDialog = ({item,modifyMedia,setShowDialog}) => {

  //TODO: form jossa editoida mediaa
  const handleEditForm = () => {

  }

  return (
    <dialog open>
      <h2>Edit Media</h2>

      <form onSubmit={handleEditForm}>


      </form>

    <button onClick={setShowDialog(false)}>Close</button>
    </dialog>
  );
};

export default EditDialog;
