import Home from "../views/Home.jsx";
import SingleView from "./SingleView";
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


  const handleModify = ()=>{
    console.log('handleModify');
    setEditItem(item);
  };

  const handleDelete = ()=>{
    console.log('handleDelete');
    if(confirm("Are you sure you want to delete?")){
      deleteMedia(item.media_id);
    }

  };

 const canEdit = (user, item)=>{
   if (user.user_id === item.user_id) {
     console.log(user.id+" canEdit " +item.id );
     return true;
   } else {
     //console.log("canEdit: false");
     return false
   }

 }
 /*const [showDialog, setShowDialog] = useState(false)*/

  return (
      <tr>
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
          <Link to="/single" state={item}>
            show
          </Link>

          {canEdit(user, item) && (
            <>
              <button onClick={handleModify}>Modify</button>
              <button onClick={handleDelete}>Delete</button>
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
