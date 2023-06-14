// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import Previous from "./previous";

function App() {
const [count,setCount]=useState(0)



  return (
    <div className="App">
      <h1>Your Current Count is {count}</h1>
      {/* <Previous count={count} setCount={setCount}/>    */}
      <Previous count={count}/>
      <button onClick={()=>{setCount(Math.floor(Math.random()*10))}}>Click me</button>
   </div>
  );
}
export default App;
