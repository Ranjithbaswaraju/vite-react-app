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


// import axios from "axios";
// import React, { useEffect, useState } from "react";
// const Search = () => {
//     const[products,setProducts]=useState([])
//     const[query,setQuery]=useState('')
//     const[filteredData,setFilteredData]=useState([])
//     useEffect(()=>{
// fetchData()
//     },[])
//     const fetchData=async()=>{
//         try{
//             const response=await axios.get('https://dummyjson.com/recipes')
//             setProducts(response.data.recipes)
//             setFilteredData(response.data.recipes)
//         }
//         catch(error){
//             console.log(error)
//         }
//     }
//     const handler=(event)=>{
//         const query1=event.target.value.toLowerCase()
//         setQuery(query1)

//         const final=products.filter((item)=>{
//             return item.name.toLowerCase().includes(query1)

//         })
//         setFilteredData(final)
//     }
//     return(
//         <>
//         <input type="text" value={query} onChange={handler}/>
//         <ol>
//         {
//             filteredData.length === 0 ?  (<h2>No data found</h2>)
//             :
//             (
//                 filteredData.map((item)=>{
//                     return(
//                         <>
//                         <li>{item.name}</li>
//                         </>
//                     )
//                 })
//             )
           
//         }
//         </ol>
        
//         </>
//     )
// }
// export default Search



import axios from "axios";
import raact, { useEffect, useState } from "react";

const Search = () => {
    const[products,setProducts]=useState([])
    const[input,setInput]=useState('')

    const changeHandler=(event)=>{
        
        setInput(event.target.value)
    }

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async()=>{
        try{
            const response=await axios.get('https://dummyjson.com/products')
            setProducts(response.data.products)
            console.log(response.data.products)
        }
        catch(err){
            console.log(err)
        }
    }
    return(
        <>
        <input type="text" onChange={changeHandler} value={input}/>
        {
            products &&

            products.filter((item)=>{
                return item.title.toLowerCase().includes(input.toLowerCase())

            }).map((items)=>{
                return(
                    <>
                      <li>{items.title}</li>  
                    </>
                )
            })
        }
        </>
    )

}
export default  Search