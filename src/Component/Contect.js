import { Link } from "react-router-dom";

export default function Contect(){
    return (
        <div>
            <h1>this is Contect page in this time you are contect page</h1>
            <Link to="/about">About</Link><br/>
            
            <Link to="/">Home</Link>
        </div>
    )
}