const pizza1pic = './src/assets/pizza1.png'


const Pizzacard = (props)=>{
    console.log('props in pizzacard:')
    console.log(props);
    const menuId = props.menuId;
    const {id, name, price} = props.pizza;
    return (
        <>
            <div>
            Pizza {id} {name} here on menu {menuId}. <br/>
            {price}€ <br/>
            </div>

            <p>{count} in cart</p>
            <button onClick={ () =>  }>
                ++
            </button>

            <button onClick={ () =>  }>
                --
            </button>



        </>

    )
}

export default Pizzacard
