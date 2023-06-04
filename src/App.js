// import logo from './logo.svg';
import "./App.css";
import React from "react"

class App extends React.Component{
  constructor(){
    super()
    console.log("constructor")
    this.state={
      count:0
    }
  }
  componentDidUpdate(preProps,preState,sanpshort){
    console.log('componentDidUpdate',preState.count,this.state.count)
  //  if(this.state.count===preState.count){
  //   alert('you data is alredy same')
  //  }
   if(this.state.count<10){
    this.setState({count:this.state.count+1})
   }
   
  }
  render(){
    console.log("render",this.state.count)
    return(
      <div>
        <h1>Component Did Update {this.state.count}</h1>
        <button onClick={()=>this.setState({count:1})}>click</button>
     
      </div>
    )
  }

}

export default App;

