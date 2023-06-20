

import {useSelector} from 'react-redux'

export default function Header (){
    const result = useSelector((state)=>state.cartData)
    console.warn('data is header',result)
return (
    <div className='Header'>
        <div className='cart-div'>
            <span>{result.length}</span>
            <img src='https://cdn-icons-png.flaticon.com/512/263/263142.png' alt='' />
        </div>
    </div>
)
}