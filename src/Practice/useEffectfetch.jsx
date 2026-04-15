// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import CardComponent from "./cardComponent";

// const UseEffectfetch=()=>{
//     const[data,setData]=useState([])


//     useEffect(()=>{
//         const data1=async()=>{
//             try{
//                 const response=await axios.get('https://fakestoreapi.com/products')
//                 setData(response.data)
//             }
//             catch(error){
//                 console.log("The error is ",error)
//             }
            
//         }
//         data1()

//     },[])
//     return(
//         <div style={{display:'flex',flexWrap:"wrap", gap:"50px",justifyContent:'center'}}>

//     {
//         data.map((item)=>{
//             return(
//                 <>
//                 <CardComponent  
//                 key={item.id}
//                 title={item.title}
//                 image={item.image}
//                 description={item.description}
//                 price={item.price}
//                 ranjith={item.category}
//                 />
//                 </>
//             )
//         })
//     }
        
//         </div>
//     )
// }
// export default UseEffectfetch


// // button clikced

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import BasicExample from "./cardComponent";


// const UseEffectfetch=()=>{
//     const[data,setData]=useState([])

// const handler=()=>{
    
//         const response=async()=>{
//             try{
//                 const mess=await axios.get('https://fakestoreapi.com/products');
//                 console.log(mess)
//                 setData(mess.data)
//             }
//             catch(err){
//                 console.log(err)
//             }
//         }
//         response()
    
// }
//     return(
//         <>
//     <button onClick={handler}>Click here</button> 

//     {
//         data.map((item)=>{
//             return(
//                 <>
//                 <BasicExample 
//                 key={item}
//                 title={item.title}
//                 des={item.description}
//                 img={item.image}
//                 />
//                 </>
//             )
//         })
//     }   
//         </>
//     )

// }
// export default UseEffectfetch


// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import CardComponent from "./cardComponent";


// const UseEffectfetch=()=>{
// const[data,setData]=useState([])

// useEffect(()=>{
//     const mess=async()=>{
//         try{
//             const final=await axios.get('https://fakestoreapi.com/products')
        
//             console.log(final)
//         setData(final.data)
//         }
        
//         catch(err){
//             console.log(err)
//         }
//     }
//     mess()
// })

// return(
//     <>
//         {
//             data.map((item)=>{
//                 return(
//                     <>
//                     <CardComponent key={item}
//                     title={item.title}
//                     category={item.category}
//                     description={item.description}
//                     image={item.image}
//                     />
//                     </>
//                 )
//             })
//         }
//     </>
// )
// }
// export default UseEffectfetch;

// without using axios

// import React, { useState } from "react";


// const UseEffectfetch=()=>{
//     const[data,setData]=useState([])

//     const response=async()=>{
//         try{
//             const response1=await fetch("https://fakestoreapi.com/products")
//             const response2=await response1.json()
//             console.log(response2)
//             setData(response2)
//             console.log("hello")
//         }
//         catch(err){
//             console.log(err)
//         }
        
    
//     }
//     response()
//     return(
//         <>
//         {
//             data.map((item)=>{
//                 return(
//                     <>
//                     <p key={item.id}>{item.id}</p>
//                     <p>{item.title}</p>
//                     <p>{item.description}</p>
//                     </>
//                 )
//             })
//         }
        
//         </>
//     )
// }
// export default UseEffectfetch

//using useeffect


import React, { useEffect, useMemo, useState } from "react";


const UseEffectfetch=()=>{
const[data,setData]=useState([])
const[name,setName]=useState('')
const[input,setInput]=useState("")


useEffect(()=>{
    const respone=async()=>{
        try{
            const response1=await fetch('https://fakestoreapi.com/products')
            const response2=await response1.json()
            console.log(response2)
            setData(response2)
        }
        catch(err){
            console.log(err)
        }
    }
    respone()
})

const handler=(e)=>{
    setName(e.target.value)
}
const filteredData=useMemo(()=>{
    return data.filter((item)=>
         item.title.toLowerCase().includes(name.toLocaleLowerCase())
    )
},[name])
return(
    <>

    <input type="text" value={name} onChange={handler}/>
    {
        filteredData.map((item)=>{
            return(
                <>
                <p>{item.id}</p>
                <p>{item.title}</p>
                <p>{item.description}</p>
                <p>{item.price}</p>
                </>
            )
        })
    }
    
    </>
)
}
export default UseEffectfetch