




// import React, { useState }  from "react";

// const UseRefExample1=()=>{

//   const[name,setName]=useState("")

//   const handler=(e)=>{
//     setName(e.target.value)
//   }

//   return(
//     <>
//     <input value={name} type="text" onChange={handler}/>
//     </>
//   )

// }
// export default UseRefExample1


import React, { useRef, useState } from "react";


const prevCount=()=>{
const[count,setCount]=useState(0)
const inputRef=useRef('')

const Counter=()=>{
  inputRef.current=count
  setCount(count+1)
}
  return(
    <>
    <p>Current Count:{count}</p>
    <p>Previous Count :{inputRef.current}</p>
    <button onClick={Counter}>Click</button>
    </>
  )
}
export default prevCount