import React,{useEffect} from "react"
export default function User (props){
 useEffect(()=>{
    console.warn("useEffect")
 },[])
    return (
        <div>
            <h1>hello world {props.count}</h1>
            <button onClick={()=>props.setCount(props.count+1)}>Click</button>
        </div>
    )
}