


import React, { useState } from "react";
import MainHeading from "./headings"

const UseCallback=()=>{
    const[toggle,setToggle]=useState(false)

    const toggleHandle=()=>{
        setToggle(!toggle)
    }
    return(
        
        <>
        {
            toggle ? <h1>Hello</h1>:<h1>Bye</h1>
        }
        <MainH eading/>
        <button onClick={toggleHandle} >Click Here</button>
        </>
    )
}
export default UseCallback