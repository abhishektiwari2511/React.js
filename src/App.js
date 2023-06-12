// import logo from './logo.svg';
import "./App.css";
import React,{useEffect,useState} from 'react'


function App() {
  const [data,setData]=useState([])
  useEffect(()=>{
getData()
  
  },[])

function getData(){
    fetch('http://localhost:5000/products').then((result)=>{
      result.json().then((req)=>{
        console.warn(req)
        setData(req)
      })
    })
}

  function deleteData(id){
   fetch(`http://localhost:5000/products/${id}`,{
    method:"DELETE"
   }).then((result)=>{
    result.json().then((res)=>{
      console.warn(res)
    })
   })
   getData()
  }


console.log(data)
  return (
    <div className="App">
   <h1>Delet Api Call</h1>
   <table border="1">
    <tbody >
      <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Email</td>
        <td>Password</td>
        <td>S.No</td>
        <td>Component</td>
      </tr>
      {
        data.map((item,i) => 
          <tr key={i}>
            <td>{item._id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
            <td>{i+1}</td>
            <button onClick={()=>deleteData(item._id)}>Delete</button>
           

          </tr>
        )
      }
      
      </tbody>
      </table>   
   </div>
);

}
export default App;
