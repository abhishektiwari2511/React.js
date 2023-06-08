import { NavLink } from "react-router-dom";

export default function Navebar() {
  return (
    <div>
      <ul className="navbar" >
        <li>
          <NavLink className="nav-bar-link" style={({isActive})=>{return{color:isActive?'blue':''}}}  to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link"  to="/about">About</NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link"  to="/Contect">Contect</NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link"  to="/Menu">Menu</NavLink>
        </li>
      </ul>
    </div>
  );
}
