
// import axios from "axios"
// import React, { useState } from "react"
// import { useRef } from "react"




// const UncontrolledComponent=()=>{
    

//     const usernameRef=useRef("")
//     const passwordRef=useRef("")
//     const [formErrors,setFormErrors]=useState({})

//     const onSubmit=(event)=>{
//         event.preventDefault()

//         const usernameEntered=usernameRef.current.value
//         const passwordEntered=passwordRef.current.value


//        const formErrors= validations(usernameEntered,passwordEntered)

//         if(Object.keys(formErrors).length>0){
//             //tRIGGER THE ERRORS

//             setFormErrors(formErrors)
//         }
//         else{
//             //Hit the Api
//             loginApi(usernameEntered,passwordEntered)
//         }

//         console.log(formErrors)
//     }

//     const loginApi=async(username,password)=>{
//         try{
//             const response=await axios.post('https://dummyjson.com/auth/login',{
//                 "username": username,
//                 "password": password,
                
//             })
//             console.log(response)
//         }
//         catch(err){
//             console.log(err)
//         }
//     }

//     const validations=(username,password)=>{
//         const formErrors={}


//         if(!username){
//             formErrors.usernameError ="Please Enter user name"          //username doesnot entered
//         }else if(username.length>20){
//             formErrors.usernameError="Please Enter less than 20 characters"
//         }

//         if(!password){
//             formErrors.passwordError ="Please Enter password"          //username doesnot entered
//      }else if(password.length>20){
//         formErrors.passwordError="Please Enter less than 20 characters"
//      }

//      return formErrors
//     }
//     return(
//         <>
// <form onSubmit={onSubmit}>
//   <div className="form-group">
//     <label htmlFor="username">Username:</label>
//     <input type="text" className="form-control" id="username" ref={usernameRef}/>
//     <span style={{color:'red'}}>{formErrors?.usernameError}</span>
//   </div>
//   <div className="form-group">
//     <label htmlFor="pwd">Password:</label>
//     <input type="password" className="form-control" id="pwd" ref={passwordRef}/>
//     <span style={{color:'red'}}>{formErrors?.passwordError}</span>
//   </div>
  
//   <button type="submit" className="btn btn-default">
//     Submit
//   </button>
// </form>

        
        
        
        
//         </>
//     )
// }
// export default UncontrolledComponent



import axios from "axios";
import React, { useRef } from "react";

const UncontrolledComponent=()=>{

    const usernameRef=useRef("")
    const passwordRef=useRef("")



    const onSubmit=(event)=>{
        event.preventDefault()


        const usernameEntered=usernameRef.current.value
        const passwordEntered=passwordRef.current.value

        console.log(usernameEntered)
        console.log(passwordEntered)

        const formErrors=validations(usernameEntered,passwordEntered)
        console.log(formErrors)

        const loginApi=async(username,password)=>{
            const response=await axios.post('https://dummyjson.com/auth/login',{
                "username":username,
                "password":password
            })
            console.log(response)
        }
    }

    const validations=(username,password)=>{
        const formErrors={}
        if(!username){
            formErrors.usernameError="please Enter username"
        }
        else if(username.length>20){
            formErrors.usernameError="please enter username lessthan 20 characters"
        }


        if(!password){
            formErrors.passwordError="please enter password"
        }
        else if (password.length>20){
            formErrors.passwordError="please enter pasword lesstah  20 charcaters"
        }
    }

    
    return(
        <>
<form onSubmit={onSubmit}>
  <div className="form-group">
    <label htmlFor="username">Email address:</label>
    <input type="text" className="form-control" id="username" ref={usernameRef}/>
  </div>
  <div className="form-group">
    <label htmlFor="pwd">Password:</label>
    <input type="password" className="form-control" id="pwd" ref={passwordRef} />
  </div>
  
  <button type="submit" className="btn btn-default">
    Submit
  </button>
</form>

        
        
        
        </>
    )
}
export default UncontrolledComponent