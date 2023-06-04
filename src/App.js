// import logo from './logo.svg';
import "./App.css";
import React from "react"
import User from "./User";
function App(){
  const [data,setData]=React.useState('abhi')
  return(
    <div>
      <User data={data}/>
      <button onClick={()=>setData('abhishek')}>Name update</button><br/>
    </div>
  )
}

export default App;

