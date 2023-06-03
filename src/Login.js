import {useState} from "react"
export default function Login(){
    const [user,setUser]=useState("")
    const [password,setPassword]=useState("")
// const [userErr,setUserErr]=useState(false);
// const [passErr,setPassErr]=useState(false);
        function getData(e){
        if(user.length<3 || password.length<3){
            alert("please input vaild (user id && password)")
        }else{
            alert("all good you are authriged person")
        }
        console.log(user,password)
        e.preventDefault()
    }
    function getUser(e){
        const item = e.target.value
        if(item.length<3){
            setUser(true)
        }else{
            setUser(false)
        }
        // setUser(item)
        
    }
    function getPassword(e){
        const item = e.target.value
        if(item.length<3){
            setPassword(true)
        }else{
            setPassword(false)
        }
        //  setPassword(item)
    }
    return (
        <div>        
        <h1>this is a login page</h1>
        <form onSubmit={getData}>
           <input type="text" placeholder="user id" onChange={getUser}/><br/>{user?<span>invild user</span>:""}
           <br/><br/>
           <input type="password" placeholder="password" onChange={getPassword}/><br/>{password?<span>invild password</span>:""}
           <br/><br/>
           <button type="submit">login</button>
        </form>
        </div>
        
    )
}

// import React, { useState } from 'react'
// function Login() {
// const [user,setUser]=useState("");
// const [password,setPassword]=useState("");
// const [userErr,setUserErr]=useState(false);
// const [passErr,setPassErr]=useState(false);

// function loginHandle(e)
// {
//     if(user.length<3 || password.length<3)
//     {
//         alert("type correct values")
//     }
//     else
//     {
//         alert("all good :)")
//     }

//     e.preventDefault()
// }
// function userHandler(e){
//     let item=e.target.value;
//     if(item.length<3 )
//     {
//        setUserErr(true)
//     }
//     else
//     {
//         setUserErr(false)
//     }
//     setUser(item)
// }
// function passwordHandler(e){
//     let item=e.target.value;
//     if(item.length<3 )
//     {
//        setPassErr(true)
//     }
//     else
//     {
//         setPassErr(false)
//     }
//     setPassword(item)

// }
// return (
//     <div>
//         <h1>Login</h1>
//        <form onSubmit={loginHandle}>
//        <input type="text" placeholder="Enter User Id" onChange={userHandler} />{userErr?<span>User Not Valid</span>:""}
//         <br /> <br />
//         <input type="password" placeholder="Enter User Password" onChange={passwordHandler}/>{passErr?<span>Password Not Valid</span>:""}

//         <br /> <br />
//         <button type="submit"  >Login</button>
//        </form>
//     </div>
// )
// }
// export default Login;