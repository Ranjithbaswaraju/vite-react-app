import React, { useState,useEffect } from "react";
const Stopwatch=()=>{

    const[time,setTime]=useState('')
    const[count,setCount]=useState(true)

    useEffect(() => {
            let intervalId;
             if (count) {
               intervalId = setInterval(() => {
                setTime((time) => time + 1);
               }, 1000);
             }
             return () => {
               clearInterval(intervalId);
             };
           }, [count]);
    const startHandler=()=>{
        setCount(true)
    }
    const stopHandler=()=>{
        setCount(false)
    }
    const resetHandler=()=>{
        setTime(0)
        setCount(false)
    }
    const hours = Math.floor(time / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return(
        <>
        <div style={{height:'100vh',width:'100vw',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div style={{height:'150px',width:'300px',backgroundColor:'aqua' ,textAlign:'center',}}>
            <h2 style={{textAlign:'center'}}>STOP WATCH</h2>
            
        <h2>{hours}:{minutes}:{seconds}</h2>
        <button onClick={startHandler}>Start</button>
        <button onClick={stopHandler}>Stop</button>
        <button onClick={resetHandler}>Reset</button>
        </div>
        </div>
        
        </>
    )
}
export default Stopwatch 