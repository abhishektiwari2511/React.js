import { Link } from "react-router-dom";



export default function Home(){
    return (
        <div>
            <h1>hello form home</h1>
            <Link to="/about">go to About</Link>
          
        </div>
    )
}