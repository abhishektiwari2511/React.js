// import logo from './logo.svg';
import "./App.css";
import addToCard from "./Redux/Action/Action";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch()
  const product={
    name:'i-phone',
    modle:'11 pro',
    prise:10000000,
    rating:'5star'
  }

return (
    <div className="App">
      <h1>hello</h1>
    <button onClick={()=>dispatch(addToCard(product))}>ADD TO CARD</button>
   </div>
  );
}
export default App;
