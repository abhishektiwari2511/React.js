// import logo from './logo.svg';
import "./App.css";
import User from "./User";

import React,{useEffect,useState} from "react"
 function App(){
  const [count,setCount]=useState(0)

  return(
    <div className="App">
     
      <User count={count} setCount={setCount} />
     
    </div>
  )
 }


export default App;

