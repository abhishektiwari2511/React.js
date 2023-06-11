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
        {/* <td>Link</td> */}
        <td>Category</td>
        <td>price</td>
        <td>createdAt</td>
        {/* <td>updateAt</td> */}
      </tr>
    {
      data.map((item,i)=>
      <tr key={i}>
        <td>{item._id}</td>
        <td>{item.name}</td>
        {/* <td>{item.link}</td> */}
        <td>{item.category}</td>
        <td>{item.price}</td>
        <td>{item.createdAt}</td>
        {/* <td>{item.updateAt}</td> */}
      </tr>
      )}
      </tbody>
   </table>
   
   
   
    </div>
);

}
export default App;
