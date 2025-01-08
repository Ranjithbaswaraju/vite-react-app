import React from "react";
import { useRef } from "react";

const UseRefExample=()=>{
    const inputRef=useRef(null)

    const handleClick=()=>{
        inputRef.current.focus()
    }

    return(
        <>
        <input type="text" ref={inputRef} placeholder="click here for focus "/>
        <button onClick={handleClick}>Click</button>
        
        </>
    )
}

export default UseRefExample