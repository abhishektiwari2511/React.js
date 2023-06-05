// import logo from './logo.svg';
import "./App.css";
import React from "react"
import Student from "./Student";

class App extends React.Component{
  constructor(){
    super()
    this.state={
      show:true
    }
    console.log("constructor")
  
  }
 
  render(){
    console.log("render",this.state.show)
    return(
      <div>
        
        {this.state.show===true?<Student/>:<h1>studen component is deleted</h1>}
        <button onClick={()=>this.setState({show:!this.state.show})}>click</button>
     
      </div>
    )
  }

}

export default App;

