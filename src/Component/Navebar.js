import { Link } from "react-router-dom";

export default function Navebar (){
return(
    <div>
            <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <br/>
        <br/>
        <li><Link to="/Contect">Contect</Link></li>
    </ul>
    </div>
)
}