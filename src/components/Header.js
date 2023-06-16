// import React from "react";
// export default function Header(){
//     return (
//         <div>
//                  <div className="add-to-cart">
//             <img src="https://static.vecteezy.com/system/resources/thumbnails/000/500/024/small/Ecommerce_998.jpg"/>
//                 </div>
//         </div>
//     )
// }

import React from 'react'
function Header(props)
{
    console.warn('length',props.data.length)
    return(
        <div>
             <div className="add-to-cart">
    <span className="cart-count">{props.data.length}</span>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>
        </div>
    )
}

export default Header