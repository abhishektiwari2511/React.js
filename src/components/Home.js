// import React from "react";
// export default function Home(props) {
//  console.warn('props in hoem', props)
//   return (
//     <div>
//        <div className="add-to-cart">
//             <img src="https://static.vecteezy.com/system/resources/thumbnails/000/500/024/small/Ecommerce_998.jpg"/>
//         </div>
//       <h1>Home page</h1>
//       <div className="cart-wrapper">
//         <div className="img-wrapper">
//           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfQjBqIF4Kf2aSdXWlfLo7h58OJlpaz36VFA&usqp=CAU" />
//         </div>
//         <div className="text-wrapper item">
//           <span>iPhone</span>
//           <span>price:$1000.00</span>
//         </div>
//         <div className="but wrapper item">
//           <button onClick={()=>props.addToCartHandler({price:1000,name:"iPhone 11"})}>add to cart</button>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react'

function Home(props) {

  console.warn('props in hoem', props)
    return (
        <div>
           
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfQjBqIF4Kf2aSdXWlfLo7h58OJlpaz36VFA&usqp=CAU" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home