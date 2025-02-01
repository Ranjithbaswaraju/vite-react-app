// import axios from "axios";
// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";

// const Search=()=>{
//     const[products,setProducts]=useState([])
//     const[searchQuery,setSearchQuery]=useState("")
//     const[filterData,setFilterdData]=useState([])

//     useEffect(()=>{
//         fetchData()
//     },[])

//     const fetchData=async()=>{
//             const response=await axios.get('https://dummyjson.com/products')
//             setProducts(response.data.products)
//            
//     }
//     const handler=(event)=>{
//         event.preventDefault()

//         const query=event.target.value.toLowerCase()
//         setSearchQuery(query)

//         const filteredData=products.filter((item)=>{
//             return item.title.toLowerCase().includes(query)
//         })
//         setFilterdData(filteredData)
//     }
//     return(
//         <>
//         <input type="text" onChange={handler} value={searchQuery}/>
//             {
//                 filterData.length>0?

//                 filterData.map((item)=>{
//                     return(
//                         <>
//                             <h1>{item.title}</h1>
//                         </>
//                     )
//                 }):
//                 (
//                     <li style={{color:'red'}}>No resultsf ofun</li>
//                 )
//             }
//         </>
//     )
// }
// export default Search;


import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Search=()=>{

    const[products,setProducts]=useState([])
    const[searchQuery,setSearchQuery]=useState("")
    const[filterdData,setFilterdData]=useState([])
    
    useEffect(()=>{
        finalData()
    },[])

    const finalData=async()=>{
        
        const response=await axios.get('https://dummyjson.com/recipes')
        setProducts(response.data.recipes)
        
    }

    const changeHandler=(event)=>{

        const query=event.target.value.toLowerCase()
        setSearchQuery(query)


        const filter=products.filter((items)=>{
            return items.name.toLowerCase().includes(query)
        })
        setFilterdData(filter)
    }

    return(
        <>
        <input type="text" onChange={changeHandler} value={searchQuery}/>
        {
            filterdData.length>0?
            filterdData.map((item)=>{
                return(
                    <>
                    <li>{item.name}</li>
                    </>
                )
            }):(
                <li style={{color:'red'}}>No result Found</li>
            )
        }
        </>
    )
}
export default Search