// import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';


function App() {
  const [text,setText]=useState(null)
  const [valu,setValue]=useState(false)
 const abhi= (event)=>{
  // console.log(event.target.value)
setText(event.target.value)
setValue(false)
 }

  return (
    <div className="App">
        {
          valu===true?<h1>{text}</h1>:null
        }
        <input type='text' onChange={abhi}></input>
        <button onClick={()=>setValue(true)}>click</button>
    </div>
  );
}



export default App;


