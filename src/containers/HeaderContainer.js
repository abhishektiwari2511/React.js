// import Header from "../components/Header"
 
// export default Header

import Header from '../components/Header'
import {connect} from 'react-redux'
const mapStateToProps=state=>({
    data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
})
export default connect(mapStateToProps,mapDispatchToProps)(Header)
// export default Home;