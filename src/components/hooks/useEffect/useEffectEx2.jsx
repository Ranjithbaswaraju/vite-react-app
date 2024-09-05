import { useEffect, useState } from "react"


const UseEffectExample2=()=>{


    const [position,setPosition]=useState({
        xPosition:0,
        yPosition:0
    })

const mouseMoveHandler=(event)=>{

    const{clientX,clientY}=event
            setPosition({...position,xPosition:clientX,yPosition:clientY})

}
    useEffect(()=>{
        window.addEventListener("mousemove",mouseMoveHandler)
        const intervalId=setInterval(()=>{},1000)
    return()=>{
        window.removeEventListener("mousemove",mouseMoveHandler)
        clearInterval(intervalId)
    }
    
    
    
    },[])


    return(
        <>
        <h3>Hello</h3>
        <h5>X position-{position.xPosition}</h5>
        <h5>Y position-{position.yPosition}</h5>
        
        </>
    )
}
export default UseEffectExample2