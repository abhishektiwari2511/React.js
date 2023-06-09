import {useSearchParams,useNavigate} from 'react-router-dom'
export default function Filter (){
    const [serchParams,setSerchParams]=useSearchParams()
    console.log(serchParams.get('city'))
    console.log(serchParams.get('age'))
    const age= serchParams.get('age')
    const city= serchParams.get('city')

    const navigate=useNavigate()

    function ram(url){
        navigate(url)
    }
    return (
        <div>
            <h1> filter</h1>
            <h2>city is {city}</h2>
            <h2>age is {age}</h2>
            <input onChange={(e)=>setSerchParams({city:e.target.value,age:70})}/>
            <button onClick={()=>setSerchParams({age:40,city:"noida"})}>set age</button>
            <br/><br/>
            <button onClick={()=>ram('/about')}>got to about page</button><br/><br/>
            <button onClick={()=>ram("/home")}>got to home page</button>
        </div>
    )
}