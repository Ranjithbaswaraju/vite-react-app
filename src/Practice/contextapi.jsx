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


import React, { useContext } from "react";
import {MessageContext} from "../App"

const ChildComponent=()=>{

    const message1=useContext(MessageContext)
    return(
        <>
        <p>Hellooooo</p>
            <p>{message1}</p>
        
        </>
    )
}
export default ChildComponent