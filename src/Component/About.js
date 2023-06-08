import { Link } from "react-router-dom";


export default function About (){
    return(
        <div>
            <h1>hello from About</h1>
           
            <Link to="/">go to Home</Link><br/><br/>
            <br/><Link to='/user/abhishek'>Abhishek</Link><br/>
            <br/><Link to='/user/abhi'>Abhi</Link><br/>
            
           
            
        </div>
    )
}