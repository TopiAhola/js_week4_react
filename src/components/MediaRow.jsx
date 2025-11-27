import Home from "../views/Home.jsx";
import SingleView from "./SingleView";
import {Link} from "react-router";
import { useUserContext } from "../hooks/contextHooks.js";
import { useMedia } from "../hooks/apiHooks.js";
import { useState } from "react";
import EditDialog from "./editDialog.jsx";




const MediaRow = (props) => {

  const { item, selectedItem, setSelectedItem } = props;
  const { user } = useUserContext();
  const {deleteMedia, modifyMedia} = useMedia();


  const handleModify = ()=>{
    console.log('handleModify');
    setShowDialog(true);

  };

  const handleDelete = ()=>{
    console.log('handleDelete');
    if(confirm("Are you sure you want to delete?")){
      deleteMedia(item.media_id);
    }

  };

 const canEdit = ()=>{return (user !== null) && (user.id === item.user_id) }
 const [showDialog, setShowDialog] = useState(false)

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
      </td>

      {canEdit && (
        <>
          <td>
            <button onClick={handleModify}>Modify</button>
          </td>
          <td>
            <button onClick={handleDelete}>Delete</button>
          </td>
          {showDialog &&
            (<EditDialog
            item={item}
            modifyMedia={modifyMedia}
            setShowDialog={setShowDialog}>

          </EditDialog>)}
        </>)
      }
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
