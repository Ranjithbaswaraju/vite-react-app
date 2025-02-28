// import React, { useContext } from "react";
// import { MessageContext } from "../App";

// const ChildComponent=()=>{

//     const message1=useContext(MessageContext)
//     return(
//         <>
//         <h1>Child Component</h1>
//         <h3>Bye</h3>
//         <h2>{message1}</h2>
//         </>
//     )
// }
// export default ChildComponent


import react, { useContext } from "react"
import {WelCome} from "./App"

const Child=()=>{
    const message=useContext(WelCome)
    return(
        <>
        <p>{message}</p>
        </>
    )
}
export default Child