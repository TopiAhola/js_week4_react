import './App.css';
import Greeting from "./components/Greetings.jsx";
import Footer from "./components/Footer.jsx";

//funktio joka palauttaa JSX (javascriptxml)
const App = () => {


    return (
        <>
            <h1>My App</h1>
            <Greeting/>
            <ul>
                <li>1. jutu</li>
                <li>2. jutu</li>
            </ul>
            <Greeting></Greeting>
            <Footer/>
        </>

    );
}


export default App;
