import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"



const UseEffectExample=()=>{
   const [data,setData]= useState([])

   const [type,setType]=useState("products")
   const[age,setAge]=useState(0) 

   useEffect(() => {
    // document.title = `Current age:${age}`;
    document.title="Effect example"
    fetchData();
}, [type, age]);



   const fetchData=async()=>{
    try{
    // const endpoint="carts"

    
    // const{data,status}=await axios.get(`http://fakestoreapi.com/${endpoint}`)
    const{data,status}=await axios.get(`http://fakestoreapi.com/${type}`)

    if(status==200){
        setData(data)
        console.log(data)
    }
  
    }catch(err){
        console.log(err)
    }
   }
const changeTypeHandler=(each)=>{
    setType(each)

}

const ageHandler=()=>{
    setAge(age+1)
}

    return(


        <>
        <h3>UseEffect Example</h3>
        <button onClick={ageHandler}>Increment age</button>
        {
            ["products","carts","users"].map(each=><><button onClick={()=>changeTypeHandler(each)}>{each}</button></> )
        }

        <h5>{type}</h5>



        {
            data.map(each=><>
            <p>{JSON.stringify(each)}</p></>)
        }
        </>
    )
}
export default UseEffectExample