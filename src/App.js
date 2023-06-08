// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import About from "./Component/About";
import Home from "./Component/Home";
import Contect from "./Component/Contect";
import Navebar from "./Component/Navebar";
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
