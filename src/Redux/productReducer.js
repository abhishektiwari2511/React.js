import { PRODUCT_REDUCER } from "./Constant-"

const productReducer= (data=[],action)=>{
switch(action.type){
    case PRODUCT_REDUCER:
        console.warn('productReducer',action)
        return [...action.data]
        default:
            return data

}
    
}

export default productReducer