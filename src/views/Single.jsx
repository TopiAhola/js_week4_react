import {Link, useNavigate} from 'react-router';


const Single = ()=>{
    const navigate = useNavigate();

    return (
        <div>
            Single view...

            <button onClick={()=>navigate(-1)}> Back </button>
        </div>
    );
}

export default Single;
