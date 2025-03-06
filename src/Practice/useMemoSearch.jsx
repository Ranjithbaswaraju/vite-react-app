

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


import React, { useMemo, useState } from "react";

const UseMemoSearch = () => {
    const[seach,setSeach]=useState("")
    const arr=['apple','banana','cat']

    const handler=(event)=>{
        setSeach(event.target.value)
    }

    const filterData=useMemo(()=>{
        return arr.filter((item)=>(
            item.toLowerCase().includes(seach.toLowerCase())
        ))
    },[seach])
        
    

    return(
        <>
        <h1>Search available fruits </h1>
            <input value={seach} onChange={handler}/>
            
            
               <ol>
               {
                filterData.length==0 ? (<p style={{color:"red"}}>No results found</p>)
                :(
                    filterData.map((item)=>{
                        return(
                           <>
                            <li>{item}</li>
                           </>
                        )
                    })
                )

            }
                </ol> 
            


        </>
    )
}
export default UseMemoSearch