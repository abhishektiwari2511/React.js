// import logo from './logo.svg';
import "./App.css";
import React,{useState} from 'react'


function App() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  function ram(){
  let data={name,email,password}
console.warn(data)
fetch('http://localhost:5000/user',{
  method:'POST',
  headers:{
    'Accept': 'application/json',
    'Content-type':'application/json'
  },
  body:JSON.stringify(data)
}).then((result)=>{
  result.json().then((res)=>{
    console.warn(res)
  })
})
// fetch("http://localhost:5000/createUser", {
//   method: "POST",
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body:JSON.stringify(data)
// }).then((resp)=>{
//   // console.warn("resp",resp);;
//   resp.json().then((result)=>{
//     console.warn("result",result)
//   })
// })
}

return(
  <div className="App">
    <h1> Post Api method</h1>
    <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
    <input type="text" name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
    <input type="text" name='password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
    <button onClick={()=>ram()}>sumit</button>

  </div>
)

}
export default App;
