// import logo from './logo.svg';
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import React,{useMemo,useState} from "react"


// import {Fragment}  from "react"


function App(){
  const [count,setCount]=useState(0)
  const [data,setData]=useState(10)
  
  const multicountMemo=useMemo(

    function multicount(){
      
      console.log("rerandring")
      return count*5
    },[count])
  return(
    <div className="App">
      <h1>your count is {count}</h1>
      <h1>your data is {data}</h1>
      <h2>{multicountMemo}</h2>
      <button onClick={()=>setCount(count+1)}>click for count</button>
      <button onClick={()=> setData(data+1)}>click for data</button>
    </div>
  )
}

export default App;


