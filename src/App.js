// import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';


function App() {
  
  const [statu,setStatus]=useState(false)

 

  return (
    <div className="App">
        {
          statu===true?<h1>hello word</h1>:null
        }
      
        {/* <button onClick={()=>setStatus(false)}>hide</button>
        <button onClick={()=>setStatus(true)}>show</button> */}
        <button onClick={()=>setStatus(!statu)}>toggle</button>
    </div>
  );
}



export default App;


