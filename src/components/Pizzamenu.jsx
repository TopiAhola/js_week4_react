import Pizzacard from "./Pizzacard.jsx";

const pizzas = [
    {id: 1, name: "pizza1", price: 1},
    {id: 2, name: "pizza2", price: 2},
    {id: 3, name: "pizza3", price: 3},
];

const Pizzamenu = (props)=>{
    console.log('Props in Pizzamenu:');
    console.log(props);
    return (
        <>
            {pizzas.map( (pizza) =>
                <Pizzacard key={pizza.id} menuId={props.menuId} pizza={pizza} />
            )}
        </>
    );
};

export default Pizzamenu;
