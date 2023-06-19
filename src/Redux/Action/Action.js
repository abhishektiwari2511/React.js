import ADD from "../Componentn-"
const addToCard = (data)=>{
console.warn('called action',data)
return({
    type: ADD,
    data:data
})
}
export default addToCard