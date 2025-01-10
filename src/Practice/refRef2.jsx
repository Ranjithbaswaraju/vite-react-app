
import React from "react";
import { useState,useRef } from "react";

const UseRefprev=()=>{
    const[count,setCount]=useState(1)
    const inputRef=useRef(0)

    const countHandler=()=>{
        inputRef.current=count
    
        setCount(count+1)
    }
    
    return(
        <>

        
        <h2>Previous count:{inputRef.current}</h2>
        <h2>Current count:{count}</h2>
        <button onClick={countHandler}>Count</button>
        </>
    )
}
export default UseRefprev
