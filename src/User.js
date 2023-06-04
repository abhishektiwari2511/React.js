import React from "react"
class User extends React.Component{
    constructor(){
        super()
            this.state={
                email:"abhi@gmail.com"
            }
        
    }

    render(){
        console.warn("render",this.props.data,this.state.email)
        return(
            <div>
                <h1>User Name {this.props.data} </h1>
                <h1>User Email {this.state.email}</h1>
               <br/><button onClick={()=>this.setState({email:"abhishek@gmail.com"})}>email update</button>
            </div>
        )
    }
}
export default User