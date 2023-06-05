// import logo from './logo.svg';
import "./App.css";
import User from "./User";

import React,{useState} from "react"
 function App(){
  const [count,setCount]=useState(0)
  const [data,setData]=useState(100)

  return(
    <div className="App">
     
      <User count={count} data={data} />
      <button onClick={()=>setCount(count+1)}>Update Count</button><br/>
      <button onClick={()=>setData(data-1)}>Update Data</button>
     
    </div>
  )
 }


export default App;

