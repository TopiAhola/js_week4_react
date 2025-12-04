import {useNavigate, useLocation} from 'react-router';
import Likes from "../components/Likes.jsx";

const Single = (props)=>{
   const navigate = useNavigate();
    const selectedItem = useLocation().state;
    //const selectedItem = props.item;  //proppi korvattu osoitteen statella
    console.log('item in Single:');
    console.log(selectedItem);

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
            <div>
                <div>
                  <h2 className="text-6xl font-extrabold relative top-0 w-fit h-auto py-4 justify-left flex">
                    Single Media
                  </h2>

                  <div className="bg-gray-800 h-2" >
                    {VideoOrImage(selectedItem)}
                  </div>

                  <dl className="[&_dt]:text-blue-400 divide-y divide-gray-300 [&_dd]:text-white
                  [&>div]:flex-col [&>div]:p-3
                  ">
                    <div>
                      <dt>Title</dt>
                      <dd>{selectedItem.title}</dd>
                    </div>

                    <div>
                      <dt>User</dt>
                      <dd>{selectedItem.username}</dd>
                    </div>

                    <div>
                      <dt>Description</dt>
                      <dd>{selectedItem.description}</dd>
                    </div>

                    <div>
                      <dt>Created At</dt>
                      <dd>{new Date(selectedItem.created_at).toLocaleString("fi-FI")}</dd>
                    </div>

                    <div>
                      <dt>Filesize</dt>
                      <dd>{selectedItem.filesize}</dd>
                    </div>

                    <div>
                      <dt>Media Type</dt>
                      <dd>{selectedItem.media_type}</dd>
                    </div>
                  </dl>

                    <Likes item={selectedItem}></Likes>
                    <button onClick={() => navigate(-1)}>Go back</button>

                </div>
            </div>
        )
    );



}

export default Single;
