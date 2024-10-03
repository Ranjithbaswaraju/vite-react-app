import React from "react";
import { useState } from "react";
const EvenOddChecker=()=>{
  const[number,setNumber]=useState("")
  const changeHandler=(event)=>{
    const finalNumber=event.target.value
  
    if(isNaN(finalNumber) || finalNumber=== ""){
      setNumber("NaN")
    }
    else{
      setNumber(finalNumber %2 === 0 ? `${finalNumber} is Even`:`${finalNumber} is Odd`)
    } 
  }
  return(
    <>
    <input type="text" placeholder="Enter a Number" onChange={changeHandler}/>
    <input type="text" placeholder="Number is " value={number}/>
    </>
  )
}
export default EvenOddChecker