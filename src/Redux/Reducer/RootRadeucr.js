import cartData from "./Reducer";
import productReducer from "../productReducer";
import {combineReducers} from 'redux'
const rootRedeucr= combineReducers({
    cartData,
    productReducer
}) 
export default rootRedeucr