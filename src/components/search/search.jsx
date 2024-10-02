

// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const Search=()=>{
//     const[products,setProducts]=useState([]J)
//     const[searchQuery,setSearchQuery]=useState()
//     const[filteredData,setFilterdData]=useState([])
// useEffect(()=>{
//     fecthData()

//     },[])

//     const fecthData=async()=>{
//         const finalData=await axios.get('https://dummyjson.com/products')
//         setProducts(finalData.data.products)
//         setFilterdData(finalData.data.products)

//     }
//     const clickHandler=(e)=>{
//         const query=e.target.value.toLowerCase()
//         setSearchQuery(query)
//         // console.log(setSearchQuery)


//         const filterData=products.filter(products=>
//             products.title.toLowerCase().includes(query)
//         )
//         setFilterdData(filterData)
//     }
//     return(
//         <>
//         <input type="text" onChange={clickHandler}  value={searchQuery}/>
//         {
//             <ol>
//                 {
//                     filteredData.length>0?(
//                         filteredData.map(product=>(
//                         <>
//                         <li>{product.title}</li>
//                         </>
//                     ))
//                 ):
//                 (
//                     <li style={{color:'red'}}>No produts found</li>
//                 )
//                 }
//             </ol>
            
//         }
//         </>
//     )
// }




import React  from "react";
import { useState,useMemo } from "react";


const Search=()=>{

    const items=["apple","banana","mango"]
    const[count,setCount]=useState("")





    const filterData= useMemo(()=>{
        return items.filter(item=>{
            return item.toLowerCase().includes(count.toLowerCase())
        })
    },[count])
    return(

        <>


        <input type="text"
        placeholder="searchHere..."
        onChange={(event)=>setCount(event.target.value)}/>


        {

            filterData.length===0 ?(
                <p>No found</p>
            ):(
                filterData.map((item,index)=>(
                    <ul key={index}>
                        <li>{item}</li>
                    </ul>
                ))
            )


            
        }
        </>
    )
}
export default Search