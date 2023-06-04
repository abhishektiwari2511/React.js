
function User(props){

    return(
        <div>
             
      <input type="number" placeholder="enter no 1" onChange={(e)=>{props.setUser1(e.target.valueAsNumber )}}/><br/>
      <input type="number" placeholder="enter no 2" onChange={(e)=>{props.setUser2(e.target.valueAsNumber)}}/><br/>
      
      {!(props.user===0)?<span>{props.user}</span>:<label>please enter value</label>}<br/>
            <button onClick={props.sum}>click</button>
        </div>
    )

}
 function Users(props){
    return(
                <div>
                   <h1>hello word</h1>
                   <button onClick={props.data}>click</button>
                </div>
            )
        }
        export{User,Users}