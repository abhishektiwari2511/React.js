// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";


function App() {
let [data,setData]=useState({name:'abhishek',age:25})



  return (
    <div className="App">
      <h1>name is {data.name}</h1><br/><br/>
      <input type="text" value={data['name']} onChange={(e)=>setData({age:data.age,name:e.target.value})}/><br/><br/>
      <h1>age is {data.age}</h1><br/><br/>
     <input type="text" value={data.age} onChange={(e)=>setData({...data,age:e.target.value})}/>
   </div>
  );
}
export default App;
