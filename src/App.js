// import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';
import Student from './Student';

function App() {
  const[data,setData]=useState(0)
  const UpdateData = ()=>{
    setData(data+1)
    // alert(data)
    // console.log('////////')
  }
  const [name,setName]=useState('abhishek')
  const UpdateName = function(){
    setName('Abhishek Tiwari')
  }
  
  return (
    <div className="App">
        <h1>{data} </h1>
        <button onClick={UpdateData}>Clike me</button>
        <Student name={name} />
        {/* <Student name='abhishek' address={{mobile:'4444',location:'katni'}}/> */}
        <button onClick={UpdateName}>update name</button>
    </div>
  );
}



export default App;


