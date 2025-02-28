// import React from "react";
// import { useRef } from "react";
// const Uncontrolled=()=>{
//     const inputRef=useRef("")
//     const clickHandler=(event)=>{
//         event.preventDefault()
//         alert(`Entered Name is ${inputRef.current.value}`)
//     }
//     return(
//         <>
//         <form onSubmit={clickHandler}>
//             <label>
//                 Name:
//                 <input type="text" placeholder="enter your name" ref={inputRef}/>

//             </label>
//             <button type="submit">Click</button>
//         </form>
//         </>
//     )
// }
// export default Uncontrolled


import React, { useRef } from "react";

const Uncontrolled=()=>{

    const inputRef=useRef('')

    const submit=(event)=>{
        event.preventDefault()
        alert(`Entered name is : ${inputRef.current.value}`)
    }
    return(
        <>
        <form onSubmit={submit}>
        <input type='text' ref={inputRef}/>
        <button type="submit">Submit</button>
        </form>
        
        </>
    )
}
export default Uncontrolled