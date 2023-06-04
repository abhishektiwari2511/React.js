// import logo from './logo.svg';
import "./App.css";
import React from "react"

class App extends React.Component{
  constructor(){
    super()
    console.log("constructor")
    this.state={
      name:"abhishek"
    }
  }
  componentDidMount(){
    console.log('componentDidMount',this.state.name)
    // this.setState({name:"ram"})
  }
  render(){
    console.log("render",this.state.name)
    return(
      <div>
        <h1>hello {this.state.name}</h1>
      <button onClick={()=>this.setState({name:"ram"})}> click</button>
      </div>
    )
  }

}

export default App;

