function user (){
    return (
        <div className="App">
          hello User
        </div>
      );
}
export default user


//////////////useState in class component\\\\\\\\\\\\\\\\\\\

// import {Component} from 'react'

// class  App extends  Component {
//   constructor(){
//     super();
//     this.state={
//       data:1
//     }
//   }
//   abhi(){
//     this.setState({data:this.state.data+1})
//   }
//   render(){
//     return (
//       <div className="App">
//           <h1>{this.state.data} </h1>
//           <button onClick = {()=>this.abhi()}>Clike me</button>
//       </div>
//     );
    
//   }
// }

////////////porps in class component\\\\\\\\\\\\\\\\\\

// import React from "react"

// class Student extends React.Component{
//   render(){
//    return(
//       <div style={{backgroundColor:'pink',margin:'10'}}>
//           <h1>hello {this.props.name}</h1>
//       </div>
//    )
//   }
// }