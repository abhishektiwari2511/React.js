// import logo from './logo.svg';
import "./App.css";
import User from "./User";
function App() {
  function getData(){
    return (
    alert("you are excess user page help of props because i send a function as a props")
    )
  }
 return (
    <div className="App">
      
     <User data={getData}/>
    
    </div>
  );
}
export default App;

