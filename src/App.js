// import logo from './logo.svg';
import "./App.css";
import {Table} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';


// import React,{useState} from "react"
 function App(){
  // const [count,setCount]=useState(0)
  // const [data,setData]=useState(100)
  const data=[
    {name:"abhishek",email:"abhishek@gmail",contact: 100},
    {name:"abhi",email:'abhi@gmail',contact: 100},
    {name:"ram",email:'abhishek@gmail',contact: 300},     
  ]
  // data.map((item)=>console.log(item))

  return(
    <div className="App">
     <h1>Data list</h1>

     <Table striped variant="dark" >
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Contact</td>
        </tr>
     {
      data.map((item,i)=>
      // <h1>name is = {item.name} ,email = {item.email} , contact ={item.contact}</h1>
      item.email==="abhishek@gmail" || item.contact===100?  
      <tr key={i}>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.contact}</td>
        </tr>:null
      )
    }
    </tbody>
    </Table>
     </div>
  )
 }


export default App;

