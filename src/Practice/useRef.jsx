import React, { useRef } from "react";

const UseRefExample = () => {
    const inputRef=useRef(null)

    const onSubmit=()=>{
        inputRef.current.focus()
    }
    return(
        <>
        <input type="text" ref={inputRef}/>
        <button onClick={onSubmit}>Click me</button>
        </>
    )
}
export default UseRefExample