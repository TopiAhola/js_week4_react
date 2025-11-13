import {useState} from "react";
import Pizzacard from "./Pizzacard.jsx";


const pizzas = [
    {id: 1, name: "pizza1", price: 1},
    {id: 2, name: "pizza2", price: 2},
    {id: 3, name: "pizza3", price: 3},
];

//states:
let pizzaCountDefault = [
    {id: 1, name: "pizza1", price: 1, count: 0},
    {id: 2, name: "pizza2", price: 2, count: 0},
    {id: 3, name: "pizza3", price: 3, count: 0}
];


const Pizzamenu = (props)=>{
    console.log('Props in Pizzamenu:');
    console.log(props);

    const [pizzaCount, setPizzaCount ] = useState(pizzaCountDefault);

    const changePizzaCount = (id,change)=>{
        console.log(pizzaCount);
        console.log('Change pizza:' +id+' ' +change);

        const newState = pizzaCount.map( (pizza,id)=>{
            if(pizza.id === id) {
                return {
                    ...pizza, count: pizza.count + 1,
                }
            } else {
                return pizza;
            }
        });

        console.log(newState);
        setPizzaCount(newState);
    };




    return (
        <>
            {pizzas.map( (pizza) =>
                <Pizzacard
                    key={pizza.id}
                    menuId={props.menuId}
                    pizza={pizza}
                    changePizzaCount={changePizzaCount}
                />
            )}
        </>
    );
};

export default Pizzamenu;
