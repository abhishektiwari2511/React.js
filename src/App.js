// import logo from './logo.svg';
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react"


// import {Fragment}  from "react"


class App extends React.PureComponent {
  constructor(){
    super()
    this.state={
      count:0
    }
  }
  
  render(){
     console.log("render is excequet")
    return (
       <div className="App">
         <h1>your current count is {this.state.count}</h1>
         <button onClick={()=>this.setState({count:1})}>Click me</button>
        
        </div>
       ) 
  }
}

export default App;


