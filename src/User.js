import React,{useEffect} from "react"
export default function User (props){
 useEffect(()=>{
    console.warn(`useEffect called 1 , ${props.count}`)
    // alert("your count is"+ props.count)
 },[props.count])
 useEffect(()=>{
    console.warn(`useEffect called 2 , ${props.data}`)
    // alert("your data is"+ props.data)
 },[props.data])
    return (
        <div>
            <h1>Count is {props.count}</h1><br/>
            <h1>Data is {props.data}</h1>
        
        </div>
    )
}