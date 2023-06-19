import {legacy_createStore} from "redux"
import rootRadeucr from "../Reducer/RootRadeucr"
// function ram (){
//     console.warn('to store',legacy_createStore)
// }
 const store = legacy_createStore(rootRadeucr)
 export default store