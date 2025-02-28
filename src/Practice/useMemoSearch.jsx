

// import React, { useMemo, useState } from "react";
// const UseMemoSearch=()=>{
//     const[search,setSearch]=useState("")
//     const items=['apple','bob','cat']
//     const changeHandler=(event)=>{
//         setSearch(event.target.value)
//     }
//     const filteredData=useMemo(()=>{
//         return items.filter((item)=>(
//             item.toLowerCase().includes(search.toLowerCase())
//         ))
//     },[search])
//     return(
//         <>
//         <input type="text" value={search} onChange={changeHandler}/>
//         {
//             filteredData.length===0?(<p style={{color:'red'}}>No result found</p>)
//             :(
//                 <ol >
//                {
//                  filteredData.map((ranjith,index)=>(
                    
//                     <li key={index}>{ranjith}</li>
//                 ))}
//                 </ol>
                
//             )
//         }
      
//         </>
//     )
// }
// export default UseMemoSearch


