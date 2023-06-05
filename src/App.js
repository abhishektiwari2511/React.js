// import logo from './logo.svg';
import "./App.css";
import "./Style.css"
import style from "./custom.module.css"
function App(){
 return(
    <div className="App">
     <h1 className="primary"> hello</h1>
     <h1 style={{color:"black",backgroundColor:'pink'}}>world</h1>
     <h1 className={style.success}>my name is abhishek</h1>
     <h1 style={{backgroundColor:'red'}} className={style.success} >Tiwari</h1>
 </div>
  )
 }


export default App;

