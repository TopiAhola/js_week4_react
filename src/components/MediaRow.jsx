
import {Link} from "react-router";
import { useUserContext } from "../hooks/contextHooks.js";
import { useMedia } from "../hooks/apiHooks.js";
import { useState } from "react";
import EditDialog from "./editDialog.jsx";


/*setEditItem={setEditItem}
showDialog={showDialog}
setShowDialog={setShowDialog}*/

const MediaRow = (props) => {

  const { item, selectedItem, setSelectedItem, showDialog, setEditItem } = props;
  const { user } = useUserContext();
  const {deleteMedia, modifyMedia} = useMedia();

  let [deleted, setDeleted] = useState(false) ;

  const handleModify = async ()=>{
    console.log('handleModify');
    setEditItem(item);
  };

  const handleDelete = async ()=>{
    console.log('handleDelete');
    if(confirm("Are you sure you want to delete?")){
      const deleteResult = await deleteMedia(item.media_id, localStorage.getItem('token'));
      if(deleteResult) {
        //
        alert('Media deleted.');
        setDeleted(true);
      } else {
        alert('Error deleting media.');
      }

    }

  };

 const canEdit = (user, item) => {
   try{
     if (user) {
       if (user.user_id === item.user_id || user.level_name === 'Admin') {
         console.log(user.id + " canEdit " + item.id);
         return true;
       } else {
         //console.log("canEdit: false");
         return false;
       }
     } else {
       //console.log('user is null at canEdit in MediaRow');
       return false;
     }
   } catch (error) {
     console.log(error);
     return false;
   }
 };
 /*const [showDialog, setShowDialog] = useState(false)*/

  return !deleted && (
      <tr className="">

        <td>
          <img src={item.thumbnail} alt={item.title} />
        </td>
        <td>{item.title}</td>
        <td>{item.username}</td>
        <td>{item.description}</td>
        <td>{new Date(item.created_at).toLocaleString("fi-FI")}</td>
        <td>{item.filesize}</td>
        <td>{item.media_type}</td>


        <td>
          <Link to="/single" state={item}> <button>Show</button> </Link>
          {canEdit(user, item) && (
            <>
              <div>
                <button onClick={handleModify}>Modify</button>
              </div>
              <div>
                <button onClick={handleDelete} className="bg-red-500!">
                  Delete
                </button>
              </div>
            </>)}

        </td>


      </tr>


  );
};

export default MediaRow;


/*
 <button onClick={(event)=> {
          setSelectedItem(item);
          console.log(event); }}> Show
        </button>

onClick={(event)=> {
          setSelectedItem(item);
          console.log(event); }}


 */
