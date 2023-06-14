// import { useMemo } from "react"
import { useRef,useEffect } from "react";
export default function Previous(props){
    /////////////////////////////////////////My code/////////////////////////////////////////
//     const memo=useMemo
//  function ram(){
// props.setCount(Math.floor(Math.random()*10))
// memo.current=props.count
// }
// const sita = memo.current

//     return(
//     <div>
//         <h1> previous count is{sita}  </h1>
//         <h3>difrent {props.count-sita}</h3>
//         <button onClick={ram}>click me</button>
    // </div>
// )
//////////////////////////////////sir code//////////////////////////////////////
const lastValue=useRef()
useEffect(()=>{
 lastValue.current=props.count
})
const  sita= lastValue.current
  return (
    <div>
        <h1>previous count is {sita}</h1>
    </div>
  )
}