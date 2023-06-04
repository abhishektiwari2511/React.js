// import logo from './logo.svg';
import "./App.css";
import React from "react"
class App extends React.Component{
  constructor()
  {
    console.warn("constructor")
    super();
    this.state={
      data:"abhishek"
    }
  }
  render()
  {
    console.warn("render")
  
    return(
      <div>
        <h1>hello world{this.state.data}</h1>
        <button onClick={()=>this.setState({data:"Abhishek"})}>abhi</button>
      </div>
    )
  }
}
export default App;

