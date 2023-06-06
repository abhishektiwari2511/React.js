

export default function User (props){

 const it=props.item
    return (
        <div>
            <span>{it.name}</span>
            <span>{props.item.email}</span>
            <span>{props.item.contact}</span>
            <button onClick={()=>props.ram(it)}>{props.item.name}</button>
        </div>
    )
}