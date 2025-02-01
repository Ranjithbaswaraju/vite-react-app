import React, { useRef, useState } from "react";

const UseRefprev=()=>{

    const[count,setCount]=useState(10)
    const inputRef=useRef("")

    const ClickHandler=()=>{

        inputRef.current=count

        setCount(count+1)
    }

    return (

      <>
        <p>Previous Count :{inputRef.current}</p>
        <p>Present Count:{count}</p>
        <button onClick={ClickHandler}>Click here</button>
      </>
    )
}

export default UseRefprev