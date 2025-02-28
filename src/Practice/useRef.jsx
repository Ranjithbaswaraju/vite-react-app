import React, { useRef } from "react";

const UseRefExample = () => {
    const inputRef=useRef(null)

    const handler=()=>{
        inputRef.current.focus()
    }
    return(
        <>
        <input type="text" ref={inputRef}/>
        <button onClick={handler}>Click me</button>
        </>
    )
}
export default UseRefExample