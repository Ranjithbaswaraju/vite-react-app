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


import axios from "axios";
import React, { useEffect, useState } from "react";
import CardComponent from "./cardComponent";


const UseEffectfetch=()=>{
const[data,setData]=useState([])

useEffect(()=>{
    const mess=async()=>{
        try{
            const final=await axios.get('https://fakestoreapi.com/products')
        
            console.log(final)
        setData(final.data)
        }
        
        catch(err){
            console.log(err)
        }
    }
    mess()
})

return(
    <>
        {
            data.map((item)=>{
                return(
                    <>
                    <CardComponent key={item}
                    title={item.title}
                    category={item.category}
                    description={item.description}
                    image={item.image}
                    />
                    </>
                )
            })
        }
    </>
)
}
export default UseEffectfetch;