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

// import React, { useMemo, useState } from "react";

// const UseMemoSearch = () => {
//     const[seach,setSeach]=useState("")
//     const arr=['apple','banana','cat']

//     const handler=(event)=>{
//         setSeach(event.target.value)
//     }

//     const filterData=useMemo(()=>{
//         return arr.filter((item)=>(
//             item.toLowerCase().includes(seach.toLowerCase())
//         ))
//     },[seach])

//     return(
//         <>
//         <h1>Search available fruits </h1>
//             <input value={seach} onChange={handler}/>

//                <ol>
//                {
//                 filterData.length==0 ? (<p style={{color:"red"}}>No results found</p>)
//                 :(
//                     filterData.map((item)=>{
//                         return(
//                            <>
//                             <li>{item}</li>
//                            </>
//                         )
//                     })
//                 )

//             }
//                 </ol>

//         </>
//     )
// }
// export default UseMemoSearch

// import React, { useState } from "react";

// const UseMemoSearch = () => {
//     const items=["apples",'banana','cat','ball','boy']
//     const[input,setInput]=useState("")

//     const filteredData=items.filter((item)=>{
//         return item.toLowerCase().includes(input.toLowerCase())
//     })

//     const handler=(e)=>{
//         setInput(e.target.value)
//     }
//     return (
//         <>

//         <input type="text" value={input} onChange={handler}/>
//         {
//             filteredData.length > 0 ? (
//                 <ol>
//                  {
//                     filteredData.map((item)=>{
//                         return(
//                             <li>{item}</li>
//                         )
//                     })
//                  }
//                 </ol>
//             ):(
//                 <p>No result</p>
//             )
//         }
//         </>
//     )
// }
// export default UseMemoSearch

// import React, { useMemo, useState } from "react";

// const UseMemoSearch = () => {
//     const items=["apple","banana","cat","ball","boy"]
//     const[input,setInput]=useState("")

//     const filteredData=useMemo(()=>{
//         return items.filter((item)=>{
//             return item.toLowerCase().includes(input.toLowerCase())
//         })
//     })

//     const handler=(e)=>[
//         setInput(e.target.value)
//     ]
//     return (
//         <>
//         <input type="text" value={input} onChange={handler}/>
//         {
//             filteredData.length > 0 ? (
//                 <ol>
//                     {
//                         filteredData.map((item)=>{
//                             return(
//                                 <li>{item}</li>
//                             )

//                 })
//                     }
//                 </ol>
//             ):(<p>No result</p>)
//         }
//         </>
//     )
// }
// export default UseMemoSearch
import React, { useMemo, useState } from "react";

const UseMemoSearch=()=>{
    const items=['apple','banana','mango']
    const[name,setName]=useState('')

    const handler=(e)=>{
        setName(e.target.value)
    }

    const filteredData=useMemo(()=>{
        return items.filter((item)=>{
            return item.toLocaleLowerCase().includes(name.toLocaleLowerCase())
        })
    })

    return(
        <>
        <input type="text" value={name} onChange={handler}/>
        <ol>
            {
            filteredData.length > 0 ? (
                filteredData.map((each)=>{
                    return(
                        <li>{each}</li>
                    )
                })
            ) : (<p style={{color:'red'}}>Not Found</p>)
        }
        </ol>
        
        
        </>
    )
}
export default UseMemoSearch


// without usemo
// import React, { useState } from "react";

// const Search=()=>{
//     const items=['apple','banana','cat']
//     const[input,setInput]=useState("")

//     const handler=(e)=>{
//         setInput(e.target.value)
//     }

//     const filterData=items.filter((item)=>{
//         return item.toLowerCase().includes(input.toLowerCase())
//     })
//     return(
//         <>
//         <input type="text" onChange={handler}/>
//         {
//             filterData.map((item)=>{
//                 return(
//                     <>
//                     <p>{item}</p>
//                     </>
//                 )
//             })
//         }
//         </>
//     )
// }
// export default Search;