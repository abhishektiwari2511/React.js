import {takeEvery,put} from "redux-saga/effects" 
import { PRODUCT_ACTION, PRODUCT_REDUCER } from "./Constant-"

function* getpoduct(){
     let data= yield fetch('http://localhost:5000/products');
     data=yield data.json()
    console.warn('we are using saga and saga is working propale',data)
     yield put({type:PRODUCT_REDUCER,data})
}

function* projectSaga (){
yield takeEvery(PRODUCT_ACTION,getpoduct)
}
export default projectSaga