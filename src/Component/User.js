import { useParams,Link } from "react-router-dom"
const User = ()=>{
    const params = useParams()
    const {name} =params
return (
    <div>
        <h1>this is {name} page</h1>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>about</Link></li>
        </ul>
    </div>
)
}
export default User