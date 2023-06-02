
function Student (props){
    return(
        <div style={{backgroundColor:'lightgray',margin:'10'}}>

        <h1>Hello {props.name}</h1>
        {/* <h2>Mobile:{props.address.mobile}</h2>
        <h3>location:{props.address.location}</h3> */}
        </div>
    )

}

export default Student