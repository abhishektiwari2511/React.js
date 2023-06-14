// import logo from './logo.svg';
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
const [count,setCount]=useState(0)
const ram = ()=>{
//   const item= Math.floor(Math.random()*10)
//   setCount((pre)=>{
//     if(pre<5){
//       console.log("your previes count is smaller than five "+pre)

//     }
//   return item
//   })
for (let i=0;i<5;i++){//0,1,2,3,4
  setCount((pre)=> {
    console.log("pre value"+pre)//0,0,1,3,6
    console.log('current value'+(pre+i))//0,1,3,6,10
    return pre+i})
}
}
  return (
    <div className="App">
      <h1>your count is {count}</h1>
      <button onClick={ram}>click me</button>
   </div>
  );
}
export default App;
