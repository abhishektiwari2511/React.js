// import logo from './logo.svg';
import "./App.css";
import React,{createRef,Component} from "react"

class App extends Component {
  constructor(){
    super()
    this.ram= createRef()
  }
  componentDidMount(){
    // console.log(this.ram.current.value='1000')
    console.log(this.ram.current.value)
  }
  ramAaaye(){
    console.log(this.ram.current.value)
    this.ram.current.style.color='white'
    this.ram.current.style.backgroundColor='gray'
    // this.ram.current.value=this.ram.current.value*5
  }

  render(){
    return(
      <div className='App'>
        <h1>hello world</h1>
        <input type="text" ref={this.ram}/>
        <button onClick={()=>this.ramAaaye()}>click</button>
      </div>
    )
  }
}
export default App

// import "bootstrap/dist/css/bootstrap.min.css";
// import React,{createRef} from "react"

// class App extends React.Component{
// constructor(){
//   super()
//   this.inputRet=createRef()
// }
// componentDidMount(){
//   console.log(this.inputRet)
// }
//   getVal(){
//     console.log(this.inputRet.current.value)
//     this.inputRet.current.style.color='red'
//     this.inputRet.current.style.backgroundColor='grey'
//     this.inputRet.current.value=this.inputRet.current.value*5
//   }
//   render(){
   
//   return(
//     <div className="App">
//     <h1>Ref in React </h1>
//     <input type="text" ref={this.inputRet} / >
//       <button onClick={()=>this.getVal()}>click</button>
//     </div>
//     )
// }
// }
// export default App;


