import { useParams,Link } from "react-router-dom"
export default function User (){
    const params=useParams()
    const {name}=params
    return(
        <div>
      <h1>this is {name} page</h1>
      <Link to="/">Home</Link>
        </div>
    )
}