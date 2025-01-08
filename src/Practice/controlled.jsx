import React from "react";
import { useState } from "react";
const Controlled=()=>{
    const[name,setName]=useState("")
    const clickHandler=(event)=>{
        setName(event.target.value)
    }
    return(
        <>
        <input type="text" placeholder="enter your name" onChange={clickHandler} value={name}/>
        <p>Your name is : {name}</p>
        </>
    )
}
export default Controlled