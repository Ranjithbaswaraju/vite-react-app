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


import axios from "axios";
import React, { useEffect, useState } from "react";
import CardComponent from "./cardComponent";

const UseEffectfetch = () => {
    const[data,setData]=useState([])

    useEffect(()=>{
        const data1=async()=>{
            try{
                const response=await axios.get('https://fakestoreapi.com/products')
                setData(response.data)
                console.log(response.data)
            }
            catch(err){
                console.log(err)
            }
        }
        data1()
    })

    return(
        <div style={{height:"100%",width:'100%',display:'flex',flexWrap:'wrap',gap:"10px",justifyContent:'center'
        }}>
            {
                data.map((each)=>{
                    return(
                        <>
                        <CardComponent
                        title={each.title}
                        category={each.category}
                        description={each.description}
                        image={each.image}/>
                        </>
                    )
                })
            }
        </div>
    )
}
export default UseEffectfetch