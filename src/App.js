// import logo from './logo.svg';
import "./App.css";
import React,{useRef} from "react"
function App(){
    let ram= useRef(null);
    console.warn(ram)
    function vishnu(){
        console.log(ram.current.value)
        ram.current.focus()
        // ram.current.style.display='none'
        ram.current.style.color='pink'
        ram.current.style.backgroundColor='grey'

    }
    return (
        <div className="App">
            <h1>hello world </h1>
            <input type="text" ref={ram} />
            <button onClick={vishnu}>click me</button>
        </div>
    )
}
 export default App
