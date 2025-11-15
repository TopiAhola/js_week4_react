import {useNavigate, useLocation} from 'react-router';


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
                    {VideoOrImage(selectedItem)}
                    <p>{selectedItem.title}</p>
                    <p>{selectedItem.description}</p>
                    <p>{new Date(selectedItem.created_at).toLocaleString("fi-FI")}</p>
                    <p>{selectedItem.filesize}</p>
                    <p>{selectedItem.media_type}</p>
                    <button onClick={() => navigate(-1)}>Go back</button>
                </div>
            </div>
        )
    );



}

export default Single;
