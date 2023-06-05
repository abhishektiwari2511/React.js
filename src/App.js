// import logo from './logo.svg';
import "./App.css";
import React,{useEffect,useState} from "react"
 function App(){
  const [count,setCount]=useState(0)
  useEffect(()=>{
    console.log("useEffect");
  })
  return(
    <div className="App">
      <h1>hello world {count}</h1>
      <button onClick={()=>setCount(count+1)}>Click</button>
    </div>
  )
 }


export default App;

