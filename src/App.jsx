import './App.css';
import Greeting from "./components/Greetings.jsx";
import Footer from "./components/Footer.jsx";
import Pizzamenu from "./components/Pizzamenu.jsx";
import CounterButton from "./components/CounterButton.jsx";


//global states:
const pizzaCount = {'1': 0, '2': 0, '3': 0};



//funktio joka palauttaa JSX (javascriptxml)
const App = () => {

    const name = 'Topi';
    const age = 69;
    const isTeacher = true;
    return (
        <>
            <h1>My App</h1>
            <Greeting name={name} age={age} isTeacher={isTeacher} />
            <ul>
                <li>1. jutu</li>
                <li>2. jutu</li>
            </ul>
            <Greeting></Greeting>
            <Pizzamenu menuId='menu1'></Pizzamenu>
            <Footer/>
            <CounterButton/>
        </>

    );
}


export default App;
