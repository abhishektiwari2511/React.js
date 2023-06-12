// import logo from './logo.svg';
import "./App.css";
import React,{useEffect,useState} from 'react'


function App() {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/products').then((resul)=>{
      resul.json().then((res)=>{
        console.warn("result",res)
        setData(res)
      })
    })
  },[])


console.log(data)
  return (
    <div className="App">
   <h1>Get Api Call</h1>
   <table border="1">
    <tbody>

   <tr>
        <td>Id</td>
        <td>Name</td>
      
        <td>Email</td>
        <td>Password</td>
      
      </tr>
    {
      data.map((item,i)=>
      <tr key={i}>
        <td>{item._id}</td>
        <td>{item.name}</td>
      
        <td>{item.email}</td>
        <td>{item.password}</td>
  
      </tr>
      )}
      </tbody>
   </table>
   
   
   
    </div>
);

}
export default App;
