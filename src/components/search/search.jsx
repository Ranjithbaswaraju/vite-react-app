

// import axios from "axios";
// import React, { useState } from "react";

// const Search=()=>{
//     const[data,setData]=useState([])
//     const[input,setInput]=useState("")


//     const fetchData=async()=>{
//         try{
//             const response=await axios.get('https://dummyjson.com/products')
//             setData(response.data.products)
//         }
//         catch(err){
//             console.log(err)
//         }
//     }
//     fetchData()

//     const filteredData=data.filter((item)=>{
//         return item.title.toLowerCase().includes(input.toLowerCase())
//     })

//     const handler=(e)=>{
//         setInput(e.target.value)
//     }
//     return(
//         <>
//         <input onChange={handler} value={input}/>
//         {
//             filteredData.length > 0 ?(
//                 filteredData.map((item)=>{
//                     return(
//                         <>
//                         <p>{item.title}</p>
//                         </>
//                     )
//                 })
//             ):(
//                 <p>No data found</p>
//             )
//         }
//         </>
//     )

    
// }
// export default Search;

import axios from "axios";
import React, { useEffect, useState } from "react";

const Search=()=>{
    const[data,setData]=useState([])
    const[input,setInput]=useState("")

useEffect(()=>{
    const fetchData=async()=>{
        try{
            const response=await axios.get('https://dummyjson.com/products')
            setData(response.data.products)
        }
        catch(err){
            console.log(err)
        }
    }
    fetchData()
},[input])
    

    const filteredData=data.filter((item)=>{
        return item.title.toLowerCase().includes(input.toLowerCase())
    })

    const handler=(e)=>{
        setInput(e.target.value)
    }
    return(
        <>
        <input onChange={handler} value={input}/>
        {
            filteredData.length > 0 ?(
                filteredData.map((item)=>{
                    return(
                        <>
                        <p>{item.title}</p>
                        </>
                    )
                })
            ):(
                <p>No data found</p>
            )
        }
        </>
    )

    
}
export default Search;