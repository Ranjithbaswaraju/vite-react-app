import React from "react";
import { useState } from "react";

const EvenOddBackground=()=>{
  const[number,setNumber]=useState("")

  const colorHandler=(event)=>{
    setNumber(event.target.value)
  }

  const backgroundColor=number%2===0 ?'black':'orange'
  return(
    <>
    <div style={{backgroundColor,height:'100vh',width:'100vw' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
    <input type="text" value={number} onChange={colorHandler} placeholder="enter a to change background color"/>
    <p>{}</p>
    </div>
    </>
  )
}
export default EvenOddBackground