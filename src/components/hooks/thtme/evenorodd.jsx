
import React, { useState } from "react";


const Even=()=>{
    const[number,setNumber]=useState("")

    const handler=(event)=>{
        setNumber(event.target.value)
    }
    const result=isNaN(number)||number==""?"":
    number%2===0?'even ':"Odd"

    return(
        <>
        <input value={number} onChange={handler}/>
        <p>The entered vale is {result}</p>
        </>
    )
}
export default Even