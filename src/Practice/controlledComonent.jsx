

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






// import React from "react";
// import { useState } from "react";

// const ControlledComponent=()=>{
//     const[model,setModel]=useState("")
//     const[modelErr,setModelErr]=useState("")

//     const modelHandler=(event)=>{

//         const modelName=event.target.value
//         console.log(modelName)
//         setModel(modelName)
//         const error=modelValidator(modelName)

//         if(error){
//             setModelErr(error)
//         }
//         else{
//             setModelErr('')
//         }
//     }

//     const onSubmit=(event)=>{
// event.preventDefault()

//             if(modelErr){
//                 alert("Please fill properly")
//             }
//             else{
//                 //Hit apiii
//             }
//     }

//     const modelValidator=(value)=>{
//         let err=""

//         const modelRegex=/^samsung/i
//         if(!value){
//             err="please enter model Nmae"
//         }
//         else if(!modelRegex.test(value)){
//             err='please enter proper samsung model'
//         }
//         return err
//     }

//     return(
//         <>
// <form onSubmit={onSubmit}>
//   <div className="form-group">
//     <label htmlFor="username">Model Name:</label>
//     <input type="text" className="form-control" id="username" value={model} onChange={modelHandler} />
//     {modelErr && <p style={{color:"red"}}>{modelErr}</p>}
//   </div>
//   <button type="submit" className="btn btn-default">
//     Submit
//   </button>
// </form>

//         </>
//     )
// }
// export default ControlledComponent

// import React, { useState } from "react";

// const ControlledComponent=()=>{
//     const[model,SetModel]=useState('')
//     const[modelErr,SetModelErr]=useState("")

//     const handler=(event)=>{
//         const modelName=event.target.value
//         console.log(modelName)
//         SetModel(modelName)

//         const error=modelValidator(modelName)

//         if(error){
//             SetModelErr(error)
//         }
//         else{
//             SetModelErr("")
//         }
//     }
//     const modelValidator=(value)=>{
//         let err=""

//         const modelRegex=/^samsung/i

//         if(!value){
//             err='please enter the model name'
//         }
//         else if(!modelRegex.test(value)){
//             err='please enter the proper model name'
//         }
//         return err
//     }

//     const onSubmit=(event)=>{

//         event.preventDefault()
//         if(modelErr){
//             alert("please fill properly")
//         }
//         else{
//             //hit the api
//         }
//     }
//     return(
//         <form onSubmit={onSubmit}>
//   <div className="form-group">
//     <label htmlFor="email">Email address:</label>
//     <input type="text" className="form-control" id="email" value={model} onChange={handler}/>
//     {modelErr && <p style={{color:'red'}}>{modelErr}</p>}
//   </div>
//   <button type="submit" className="btn btn-default">
//     Submit
//   </button>
// </form>
//     )
// }
// export default ControlledComponent


// import React, { useState } from "react";
// const ControlledComponent=()=>{
//     const[model,setModel]=useState("")
//     const[modelErr,setModelErr]=useState('')



//     const modelHandler=(event)=>{
//         const enteredModel=event.target.value
//         setModel(enteredModel)

//         let error=validations(enteredModel)

//         if(error){
//             setModelErr(error)
//         }
//         else{
           
//             setModelErr('')
//         }
//     }
//         const validations=(value)=>{
//         let err=''
//         const regex=/^samsung/i
//         if(!value){
//             err='please enter the model name'
//         }
//         else if(!regex.test(value)){
//             err='please enter the proper model name'
//         }
//         return err
//     }
//     const onSubmit=(event)=>{
//         event.preventDefault()
//         if(modelErr){
//             alert("please fill properly")
//            setModel("")
//         }
//         else{
//             //hit the api
//             alert("enterd details are correct")
//         }
//     }
//     return(
//         <form onSubmit={onSubmit}>
//   <div className="form-group">
//     <h1>Entering the samsung model</h1>
//     <label htmlFor="username">Email address:</label>
//     <input type="text" className="form-control" id="username" value={model} onChange={modelHandler}/>
//     <span style={{color:'red'}}>{modelErr}</span>
//   </div>
  
//   <button type="submit" className="btn btn-default">
//     Submit
//   </button>
// </form>

//     )
// }
// export default ControlledComponent


import React, { useState } from "react";
import { use } from "react";

const ControlledComponent=()=>{
    const[mdl,setMdl]=useState("")
    const[mdlErr,setMdlErr]=useState('')

    const mdlHandler=(e)=>{
        const mdlEntered=e.target.value
        setMdl(mdlEntered)

        const error=modelValidator(mdlEntered)
        if(error){
            setMdlErr(error)
        }
        else{
            setMdlErr("")
        }
        
    }

    const onSubmit=(e)=>{
        e.preventDefault()
        if(mdlErr){
            alert("please fill properly")
           
        }
        else{
            //
            alert('Enter correct model')
        }

    }
    
    const modelValidator=(value)=>{
        let err=''
        let Regex=/^samsung/i
        if(!value){
            err='Please enter model Name'
        }
        else if(!Regex.test(value)){
            err='please enter the proper model name'
        }
        return err
    }


    return(
        <>
        <form onSubmit={onSubmit}>
  <div className="form-group">
    <label htmlFor="username">Email address</label>
    <input
      type="text"
      className="form-control"
      id="username"
      value={mdl}
      onChange={mdlHandler}
    
      placeholder="Enter email"
    />
    <span style={{color:'red'}}>{mdlErr}</span>
    
  </div>
  
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>
        </>
    )
}
export default ControlledComponent