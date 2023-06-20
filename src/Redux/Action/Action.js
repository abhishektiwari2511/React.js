import {ADD, EMPTY, REMOVE} from "../Constant-"
const addToCard = (data)=>{
console.warn('called action',data)
return({
    type: ADD,
    data:data
})
}

export const removeToCard=(data)=>{
    console.warn('remove action is called',data)
    return({
        type:REMOVE,
        data
    })
}
export default addToCard

export const empty=()=>{
    console.warn('action is called for empty')
    return({
        type:EMPTY
    })
}
