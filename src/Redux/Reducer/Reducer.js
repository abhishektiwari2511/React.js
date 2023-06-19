import ADD from "../Componentn-"
const cartData=(data=[],action)=>{
 if(action.type===ADD){
    console.warn('called reducer',action)
    return data
 }
 else{
    return 'no data'
 }
}
export default cartData