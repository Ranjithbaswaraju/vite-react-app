import React, { useRef, useState } from "react";

const UseRefExample=()=>{
  const[count,setCount]=useState(0)
  const inputRef=useRef(null)

  const handler=()=>{
    inputRef.current=count

    setCount(count+1)
  }

  return(
    <>
    <p>Previous count:{inputRef.current}</p>
    <p>Current Count:{count}</p>
    <button onClick={handler}>Click me</button>
    </>
  )
}
export default UseRefExample