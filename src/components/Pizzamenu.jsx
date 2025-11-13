import Pizzacard from "./Pizzacard.jsx";

const Pizzamenu = (props)=>{
    console.log('Props in Pizzamenu:');
    console.log(props);
    return (
        <>
            <Pizzacard menuId={props.menuId}/>
            <br/>
            <Pizzacard menuId={props.menuId}/>
        </>
    );
};

export default Pizzamenu;
