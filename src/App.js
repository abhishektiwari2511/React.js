// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
function App() {
  return (
    <div className="App">
       <h1>H.O.C</h1>
      <HocRed ram={Component}/>
      <HocBlue ram={Component}/>
      <h1 style={{backgroundColor:'gray',color:'white',width:'100'}}><Component/></h1>
    </div>
  );
}
function HocRed(props){
  return  <h2 style={{backgroundColor:'red',width:'100'}}>red<props.ram /></h2>
 }
 function HocBlue (props){
  return <h2 style={{backgroundColor:'blue',width:'100'}}>blue<props.ram /></h2>
 }
function Component(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>your count is {count}</h1>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}
export default App;

