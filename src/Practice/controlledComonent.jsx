

// import React, { useState } from "react";

// const ControlledComponent=()=>{
//     const[model,setModel]=useState("")
//     const[modelErr,setModelErr]=useState("")

//     const modelHandler=(event)=>{

//         const modelName=event.target.value
//         console.log(modelName)

//         setModel(modelName)
//        const error= modelValidator(modelName)

//        if(error){
//         setModelErr(error)
//        }
//        else{
//         setModelErr("")
//        }
       
//        console.log(modelName)
//     }

//     const onSubmit=(event)=>{
//         event.preventDefault()

//         if(modelErr){
//             alert("Please fill properly")
//         }
//         else{
//             //Hit the Api
//         }
//     }

//     const modelValidator=(value)=>{

//         let error=""

//         const modelRegex=/^samsung/i
//          if(!value){
//             error="Please enter modele name"
//         }
//         else if(!modelRegex.test(value)){
//             error="please enter proper samsung model"
//         }
//         return error
//     }
//     return(
//         <>
//     <form onSubmit={onSubmit}>
//   <div className="form-group">
//     <h1>Samsung service Form</h1>
//     <label htmlFor="username">Email device Model:</label>
//     <input type="text" className="form-control" id="username"  value={model} onChange={modelHandler}/>
//     {modelErr && <p style={{color:'red'}}>{modelErr}</p>}
//   </div>
  
//   <button type="submit" className="btn btn-default">
//     Submit
//   </button>
// </form>



//         </>
//     )
// }
// export default ControlledComponent





import React from "react";
import { useState } from "react";

const ControlledComponent=()=>{
    const[model,setModel]=useState("")
    const[modelErr,setModelErr]=useState("")

    const modelHandler=(event)=>{

        const modelName=event.target.value
        console.log(modelName)


        setModel(modelName)


        const error=modelValidator(modelName)

        if(error){
            setModelErr(error)
        }
        else{
            setModelErr('')
        }
    }

    const onSubmit=(event)=>{
event.preventDefault()

            if(modelErr){
                alert("Please fill properly")
            }
            else{
                //Hit apiii
            }
    }

    const modelValidator=(value)=>{
        let err=""

        const modelRegex=/^samsung/i
        if(!value){
            err="please enter model Nmae"
        }
        else if(!modelRegex.test(value)){
            err='please enter proper samsung model'
        }
        return err
    }

    return(
        <>


<form onSubmit={onSubmit}>
  <div className="form-group">
    <label htmlFor="username">Model Name:</label>
    <input type="text" className="form-control" id="username" value={model} onChange={modelHandler} />
    {modelErr && <p style={{color:"red"}}>{modelErr}</p>}
  </div>
  
  <button type="submit" className="btn btn-default">
    Submit
  </button>
</form>

        </>
    )
}
export default ControlledComponent