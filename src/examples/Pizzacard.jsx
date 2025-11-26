
const pizza1pic = './src/assets/pizza1.png'

const Pizzacard = (props)=>{
    console.log('props in pizzacard:')
    console.log(props);
    const menuId = props.menuId;
    const {id, name, price} = props.pizza;
    const changePizzaCount = props.changePizzaCount;
    return (
        <>
            <div>
            Pizza {id} {name} here on menu {menuId}. <br/>
            {price}€ <br/>
            </div>

            <button onClick={ () => changePizzaCount(id,1) }>
                ++
            </button>

            <button onClick={ () => changePizzaCount(id,-1) }>
                --
            </button>
        </>

    )
}
export default Pizzacard
