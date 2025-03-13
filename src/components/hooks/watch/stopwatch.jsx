import React, { useEffect, useState } from "react";
const Stopwatch=()=>{

    const[time,setTime]=useState(0)
    const[count,setCount]=useState(false)

    useEffect(()=>{
        let intervalId;
        if(count){
            intervalId=setInterval(()=>{
                setTime((time)=>time+1)
            },1000)
        }
        return ()=>{
            clearInterval(intervalId)
        }
    })

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

    const hours=Math.floor(time/3600).toString().padStart(2,'0')
    const minutes=Math.floor((time%3600)/60).toString().padStart(2,'0')
    const seconds=(time%60).toString().padStart(2,'0')
    return(
        <div style={{height:"100vh",width:'100vw',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div style={{height:'150px',width:'300px',textAlign:"center",backgroundColor:'aqua'}}>
                    <h3>STOP WATCH</h3>

            <h5>{hours}:{minutes}:{seconds}</h5>
            <button onClick={startHandler}>START</button>
            <button onClick={stopHandler}>STOP</button>
            <button onClick={resetHandler}>RESET</button>
            </div>
        </div>
    )
}
export default Stopwatch
