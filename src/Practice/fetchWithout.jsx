import axios from "axios"
import { useState } from "react"


const WithoutFetch=()=>{
    const[data,setData]=useState("")

    const fetchData=async()=>{
        try{
            const response=await axios.get('https://fakestoreapi.com/products')
            setData(response.data)
            console.log(response.data)
        }
        catch(err){
            console.log(err)
        }
    }
    fetchData()
    return(
        <>
        <ol >
            {data && data.map((item,id)=>{
                return(
                    <>
                    <li key={item.id}>title:{item.title}</li>
                    <li>price:{item.price}</li>
                    </>
                )
})}
        </ol>
        </>
    )
}
export default WithoutFetch

