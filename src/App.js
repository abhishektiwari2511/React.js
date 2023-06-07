// import logo from './logo.svg';
import "./App.css";
import React,{useRef} from "react"
import User from "./User"
function App(){
    let ram= useRef(null);
    console.warn(ram)
    function vishnu(){
        console.log(ram.current.value)
        ram.current.focus()
        // ram.current.style.display='none'
        ram.current.style.color='white'
        ram.current.style.backgroundColor='grey'

    }
    return (
        <div className="App">
            <h1>hello world </h1>
            <User ref={ram} />
            <button onClick={vishnu}>click me</button>
        </div>
    )
}
 export default App
