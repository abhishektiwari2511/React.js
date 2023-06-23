import {ADD, EMPTY, REMOVE} from "../Constant-"
const cartData=(data=[],action)=>{

switch(action.type){
   case ADD:
      console.warn("called reducer",action)
      return [action.data,...data]
      
      case REMOVE:
         console.warn('remove reducer is called',action)
         data.length=data.length?data.length-1:''
         return [...data]

         case EMPTY:
            console.warn('reducer is called for empt',action)
            return []
       default:
          return data
          
         }
}
         export default cartData