
import React from "react";
import { useState } from "react";

const UseStateCounter=()=>{
    const[count,setCount]=useState(0)

    const incrementHandler=()=>{
        setCount(count+1)
    }
    const decrementHandler=()=>{
        if(count>=1){
            setCount(count-1)
        }
        else{
            alert("Count is not in negative")
        }
    }
    const resetHandler=()=>[
        setCount(0)
    ]

    return(

        
        <>
        <h2>Count:{count}</h2>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={resetHandler}>Rest</button>
        
        
        </>
    )

    

}
export default UseStateCounter
