import {useState} from "react";

const CounterButton = ()=>{

    const [count, setCount_CallbackFunction] = useState(0);


    const eventHandler = ()=>{
        console.log('eventhandler reset');
        setCount_CallbackFunction('nolla');
        console.log('count: '+count);
    }

    const [input, setInput] = useState("69");


    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={ () => setCount_CallbackFunction(count + 1) }>
                Click me
            </button>

            <p>You clicked {count} times</p>
            <button onClick={ eventHandler }>
                +reset
            </button>

            <div>
                <p>You wrote:{input}</p>
                <input type="text" onChange={ (ev)=> setInput(ev.target.value) } placeholder="Enter something" />
            </div>

        </div>
    );
}




export default CounterButton;
