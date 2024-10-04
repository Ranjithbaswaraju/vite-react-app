
import React from "react";
import { useState } from "react";

const Even=()=>{
    const[number,setNumber]=useState("")

    const EvenHandler=(event)=>{
        setNumber(event.target.value)
    }
    const result=isNaN(number)||number===""?"":
    number%2===0?"even":"odd"
    return(
        <>
        <input type="text" value={number} onChange={EvenHandler}/>
        <p>Entered Number is :{result}</p>
        </>
    )
}
export default Even