import Home from "../views/Home.jsx";
import SingleView from "./SingleView";


const MediaRow = (props) => {
  const { item, selectedItem, setSelectedItem } = props;
  return (

      <tr>
        <td>
          <img src={item.thumbnail} alt={item.title} />
        </td>
        <td>{item.title}</td>
        <td>{item.description}</td>
        <td>{new Date(item.created_at).toLocaleString("fi-FI")}</td>
        <td>{item.filesize}</td>
        <td>{item.media_type}</td>
        <td>
            <Link to="/single" state={selectedItem} >Show</Link>
        <button onClick={(event)=> {
          setSelectedItem(item);
          console.log(event); }}> Show
        </button>
        </td>
      </tr>

  );
};

export default MediaRow;
