// import logo from './logo.svg';
import "./App.css";
import {User,Users} from "./User";
import {useState} from "react"
function App() {
  const [user1,setUser1]=useState(0)
  const [user2,setUser2]=useState(0)
  const [user,setUser]=useState(0)
  function getData(){
    return (
    alert("you are excess user page help of props because i send a function as a props")
    )
  }
  function Sum(){
    let a=user1
    let b=user2
    let c= (a+b)
    console.log(user1.type,user2.type,c)
     setUser(c)
  }
 return (
    <div className="App">
      <h1>sum 2 no</h1>
      {/* <input type="number" placeholder="enter no 1" onChange={(e)=>{setUser1(e.target.valueAsNumber )}}/><br/>
      <input type="number" placeholder="enter no 2" onChange={(e)=>{setUser2(e.target.valueAsNumber)}}/><br/>
      
      {!(user===null)?<span>{user}</span>:'please enter value'} */}
     <User  sum={Sum} user={user} setUser1={setUser1} setUser2={setUser2}/>
     <Users data={getData}/>
    
    </div>
  );
}
export default App;

