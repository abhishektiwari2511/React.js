// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import About from "./Component/About";
import Home from "./Component/Home";
import Contect from "./Component/Contect";
import Navebar from "./Component/Navebar";
import User from "./Component/User";

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        {/* <Link to="/">H</Link> <br />
        <Link to="/about">A</Link> */}
        <Navebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
         
          <Route path="/Contect" element={<Contect/>}/>
          <Route path='/user/:name' element={<User/>} />
          
          
          <Route path="/*" element={<Navigate to="/"/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
