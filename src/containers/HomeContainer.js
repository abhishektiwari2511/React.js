import {  connect } from "react-redux";
import Home from "../components/Home";
import{addToCart} from '../service/actions/action'


// const mapStateToProps=state=>({
//    data:state.crdItem
// })
// const mapDispatchToProps=dispatch=>({
//     addToCartHandler:data=>dispatch(addToCart(data))
// })



// export default connect(mapStateToProps,mapDispatchToProps)(Home)

// export default Home


// import Home from '../components/Home'
// import {connect} from 'react-redux'
// import {addToCart} from '../service/actions/actions'

const mapStateToProps=state=>({
    // data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home;
