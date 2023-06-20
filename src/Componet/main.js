
import addToCard, { empty, removeToCard } from "../Redux/Action/Action";
import { useDispatch } from "react-redux";
function Main() {
  const dispatch = useDispatch()
  const product={
    name:'i-phone',
    modle:'11 pro',
    prise:10000000,
    rating:'5star'
  }

return (
    <div >
      <h1>hello</h1>
    <button onClick={()=>dispatch(addToCard(product))}>ADD TO CARD</button>
    <div>
      <button onClick={()=>dispatch(removeToCard(product))}>REMOVE TO CARD</button>
    </div>
    <div>
      <button onClick={()=>dispatch(empty())}>EMPTY CARD</button>
    </div>
   </div>
  );
}
export default Main;