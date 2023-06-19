import{useState} from "react"
export default function User(props){
    const [count,setCount]=useState(0)
    // function ram(){
    //     setCount(count+1)
    // }

    function sita(){
     props.setSum(props.sum+1)
    }
    return (
        <div>
            <h1>hello world</h1>
            <h1>{count}</h1>
            
            <button onClick={()=>props.ram(count,setCount,sita)}>click</button>
            {/* {sita()} */}

        </div>
    )
}