
import addToCard, { empty, removeToCard } from "../Redux/Action/Action";
import { useDispatch } from "react-redux";
import productAction from "../Redux/productAction";
import {useSelector} from "react-redux"
import { useEffect } from "react";
function Main() {
  const dispatch = useDispatch()
  // const product={
  //   name:'i-phone',
  //   modle:'11 pro',
  //   prise:10000000,
  //   rating:'5star'
  // }


  const abhi= useSelector((state)=>state.productReducer)
  console.warn('data is main',abhi.productReducer)

  useEffect(()=>{
  dispatch(productAction())
  },[])

return (
    <div >
      {/* <h1>hello</h1>
    <button onClick={()=>dispatch(addToCard(product))}>ADD TO CARD</button>
    <div>
      <button onClick={()=>dispatch(removeToCard(product.name))}>REMOVE TO CARD</button>
    </div> */}
    <div>
      <button onClick={()=>dispatch(empty())}>EMPTY CARD</button>
     {/* <div>
      <button onClick={()=>dispatch(productAction())}>product action</button>
     </div> */}
    </div>
    <div className="product-container">
      {
        abhi.map((item,i)=>
        
          <div key={i}>
            <img src={item.photo} alt="" />
            <div>
            <h6>
              NAME :{item.name}
            </h6>
          <h6>
          EMAIL :{ item.email}
            </h6> 
            <h6>
              PASSWARD:{item.passward}
            </h6>

          </div>
          <button onClick={()=>dispatch(addToCard(item))}>ADD TO CARD</button>
          <button onClick={()=>dispatch(removeToCard(item.id))}>REMOVE TO CARD</button>
           
          </div>
        

        )
      }
    </div>
   </div>
  );
}
export default Main;