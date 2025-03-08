// import React, { useState } from "react";
// import DivComponent from "./divcomponent";

// import { useState } from "react"
// import DivComponent from "./divcomponent"

// const Divs=()=>{
//     const[circle,setCircle]=useState(false)

//     const clickHandler=()=>{
//         setTimeout(()=>{
//             setCircle(true)
//         },2000)
//     }
//     return(
//         <>
//         <div style={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
//             {[1, 2, 3, 4, 5, 6, 7,8, 9, 10].map((item)=>{
//                 return(
//                     <DivComponent key={item} circle={circle}/>
//                 )
//             })}
//         </div>
//         <button onClick={clickHandler}>Click Here</button>
        
//         </>
//     )
// }
// export default Divs


// // import React from "react";
// // import DivComponent from "./divcomponent";

// // const Divs = () => {
// //     return (
// //         <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
// //             {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
// //                 <DivComponent key={item} />
// //             ))}
// //         </div>
// //     );
// // };

// // export default Divs;

import React, { useState } from "react"

import DivComponent from "./divcomponent"
const Divs = () => {
    const[circleIndex,setCircleIndex]=useState(false)

    const clickHandler=()=>{
        for(let i=0;i<15;i++){
            setTimeout(()=>{
                setCircleIndex(i)
            },i*1000)
        }
    }
    return(
        <>
        <div style={{display:'flex',flexWrap:'wrap',gap:'10px'}}>

            {
                [...Array(15)].map((_,index)=>{
                    return(
                       <>
                        <DivComponent key={index} isCircle={index<=circleIndex}/>
                       </>
                    )
                })
            }
            </div>
            <button onClick={clickHandler}>Start</button>
        </>
    )
}
export default  Divs