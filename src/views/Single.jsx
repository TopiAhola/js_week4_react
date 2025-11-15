import {Link, useNavigate, useLocation} from 'react-router';


const Single = ()=>{
    const navigate = useNavigate();
    const {state} = useLocation();
    const item = state.item;


    return (
        <div>
            Single view...

            <button onClick={()=>navigate(-1)}> Back </button>
        </div>
    );
}

export default Single;
