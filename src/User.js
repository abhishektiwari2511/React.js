

export default function User (props){
    // const ram= ()=>{
    // alert(`hello ${props.item.name} from `+props.item.address.city)
    // }
    return (
        <div>
            <span>{props.item.name}</span>
            <span>{props.item.email}</span>
            <span>{props.item.contact}</span>
            <button onClick={props.ram}>{props.item.name}</button>
        </div>
    )
}