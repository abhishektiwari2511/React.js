// import logo from './logo.svg';
import "./App.css";
import React from "react"

class App extends React.Component{
  constructor(){
    super()
    this.state={
      count:0
    }
    console.log("constructor")
  
  }
  shouldComponentUpdate(){
    console.log('ShouldComponentUpdate',this.state.count)
  
 if(this.state.count>5 && this.state.count<10 ){
  return true
 }
 else{
  return false
 }
  }
  render(){
    console.log("render",this.state.count)
    return(
      <div>
        <h1> Should Component Update {this.state.count} </h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>click</button>
     
      </div>
    )
  }

}

export default App;

