
import React, { useRef } from "react";

const UseRefExample=()=>{
    const inputRef=useRef("")

    const clickHandler=(event)=>{
        event.preventDefault()
        inputRef.current.focus()
    }

    return(
        <>
        <form onSubmit={clickHandler}>
            <input type="text" ref={inputRef} placeholder="Color Chnages"/>
            <button type="submit">Click Here</button>
        </form>
        </>
    )
}
export default UseRefExample