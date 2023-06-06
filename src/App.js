// import logo from './logo.svg';
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import User from "./User";
// import {Fragment}  from "react"


function App() {
  
  const data = [
    {
      name: "abhishek",
      email: "abhishek@gmail",
      contact: 100,
      address:{
        city:"katni",
        pincord:4288
      }
     
    },
    {
      name: "abhi",
      email: "abhi@gmail",
      contact: 100,
      address:{
        city:"katni",
        pincord:4288
      }
     
    },
    {
      name: "ram",
      email: "abhishek@gmail",
      contact: 300,
      address:{
        city:"katni",
        pincord:4288
      }
      
      
    },
  ];
 const ram = (it)=>{
  alert(`hello ${it.name} from `+ it.address.city)

 } 
 return (
    <div className="App">
      <h1>hello usser</h1>
      {
        data.map((item,i)=>(
          <User item={item} ram={ram} key={i} />
        ))
      }
     </div>
    ) }

export default App;


