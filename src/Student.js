import React from "react";
export default class Student extends React.Component {
    componentWillUnmount(){
        console.log("componentWillUnmount")
        alert('you student component is deleted')
    }
    render(){
        return(
            <div>
                <h1>hello form student</h1>
            </div>
        )
    }
}