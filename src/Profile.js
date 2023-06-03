import{useState} from 'react'
const Profile=()=>{
const [user,setUser]=useState(3)
    
return(
    <div>
        { user===1?<h1>wellcome user 1</h1>
        :user===2?<h1>wellcome user 2</h1>
        :<h1>wellcome user 3</h1>}
    </div>
    )

}
export default Profile

// const Profile=()=>{
//     const user = 5
// if(user===1){
//     return(
//         <h1>wellcome user1</h1>
//     )
// }else if(user===2){
//     return(
//         <h1>wellcome user2</h1>
//     )
// }else{
//     return(<h1>wellcome user</h1>
// )}
// }
// export default Profile