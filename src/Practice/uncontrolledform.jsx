
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



// import axios from "axios";
// import React, { useRef, useState } from "react";



// const UncontrolledComponent=()=>{

//     const usernameRef=useRef("")
//     const passwordRef=useRef("")
//     const[formErrors,setFormErrors]=useState({})


//     const onSubmit=(event)=>{
//         event.preventDefault()

//         const usernameEntered=usernameRef.current.value
//         const passwordEntered=passwordRef.current.value
//         console.log(usernameEntered)
//         console.log(passwordEntered)



//        const formErrors= validations(usernameEntered,passwordEntered)
       
//        if(Object.keys(formErrors).length>0){
//         //Trigger the error
//         setFormErrors(formErrors)
//        }
//        else{
//         //Hit the api
//         loginApi(usernameEntered,passwordEntered)
//        }
//     }


//     const validations=(username,password)=>{

//         const FormErrors={

            
//         }

//         if(!username){
//             FormErrors.usernameError="Please enter username"
//         }
//         else if(username.length>20){
//             FormErrors.usernameError="Please enter less thane 20 charcaters"
//         }

//         if(!password){
//             FormErrors.passwordError="Please enter the password"
//         }
//         else if(password.length>20){
//             FormErrors.passwordError="Please Enter less than 20 characters"
           
//         }
//         return FormErrors
//     }   

// const loginApi=async(username,password)=>{
//     try{
//     const response=await axios.post('https://dummyjson.com/auth/login',{
//        "username":username,
//        "password":password
//     })
//     console.log(response)
// }
// catch(err){
//     console.log(err)
// }

   
// }
//     return(
//         <>
//         <form onSubmit={onSubmit} >
//   <div className="form-group">
//     <label htmlFor="username">Email address:</label>
//     <input type="text" className="form-control" id="username" ref={usernameRef} />
//     <span style={{color:'red'}}>{formErrors?.usernameError}</span>
//   </div>
//   <div className="form-group">
//     <label htmlFor="pwd">Password:</label>
//     <input type="password" className="form-control" id="pwd" ref={passwordRef}/>
//     <span style={{color:'red'}}>{formErrors.passwordError}</span>
//   </div>
  
//   <button type="submit" className="btn btn-default">
//     Submit
//   </button>
// </form>
//         </>
//     )

// }
// export default UncontrolledComponent


// import axios from "axios";
// import React, { useRef, useState } from "react";

// const UncontrolledComponent=()=>{

//     const usernameRef=useRef("")
//     const passwordRef=useRef("")
//     const[formErrors,setFormErrors]=useState({})
//     const [apiError, setApiError] = useState("");


//     const onSubmit=(event)=>{
//         event.preventDefault()

//         const usernameEntered=usernameRef.current.value
//         const passwordEntered=passwordRef.current.value
//         console.log(usernameEntered)

//         const formErrors=validations(usernameEntered,passwordEntered)

//         console.log(formErrors)

//         if(Object.keys(formErrors).length>0){
//             setFormErrors(formErrors)
//         }
//         else{
//             loginApi(usernameEntered,passwordEntered)
//         }
//     }
//     const validations=(username,password)=>{
//         const FormErrors={
            
//         }
//         if(!username){
//             FormErrors.usernameError="Please enter the username"
//         }
//         else if(username.length>20){
//             FormErrors.passwordError="Please enter lessthan 20 characters"
//         }
//         if(!password){
//             FormErrors.passwordError="Please enter the password"
//         }
//         else if(password.length>20){
//             FormErrors.passwordError="Please enter the lessthan 20 charcters"
//         }
//         return FormErrors
//     }
//     const loginApi=async(username,password)=>{
//         try{
//             const response=await axios.post('https://dummyjson.com/auth/login',{
//                 "username": username,
//                 "password": password
//             })
//             console.log(response)

//             setFormErrors({})
//             setApiError("")

//             alert("Login succesfull")
//         }
//         catch(err){
//             console.log(err)
//             setApiError("username and password not exist")

//         }
//     }
//     return(
//         <>
// <form onSubmit={onSubmit}>
//   <div className="form-group">
//     <label htmlFor="username">Email address:</label>
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
//   {apiError &&  <p style={{color:"red"}}>{apiError}</p>}
 
// </form>
//         </>
//     )
// }
// export default UncontrolledComponent


import axios from "axios";
import React, { useRef, useState } from "react";



const UncontrolledComponent=()=>{

    const inputRef=useRef("")
    const passwordRef=useRef("")
    const[formErrors,setFromErrors]=useState({})
    const[apiErr,setApiErr]=useState("")

    const onSubmit=(event)=>{
        event.preventDefault()

        const usernameEntered=inputRef.current.value
        const passwordEntered=passwordRef.current.value

        console.log(usernameEntered)
        console.log(passwordEntered)

        const formErrors=validations(usernameEntered,passwordEntered)
        console.log(formErrors)

        if(Object.keys(formErrors).length>0){
            setFromErrors(formErrors)
        }
        else{
            loginApi(usernameEntered,passwordEntered)
            
            

        }

    }

    const loginApi=async(username,password)=>{
        try{
            const response=await axios.post('https://dummyjson.com/auth/login',{
                username:username,
                password:password
            })
            console.log(response)
            setFromErrors({})
            setApiErr("")
            alert("Login Successfull")
            inputRef.current.value=""
            passwordRef.current.value=""
            

            
        }
        catch(err){
            console.log(err)
            setApiErr("username and password not exist")
           
        }
    }
    const validations=(username,password)=>{
        const Form={}

        if(!username){
            Form.usernameError="please enter the username"
        }
        else if(username.length>20){
            Form.usernameError="please enter the lessthan 20 characters"
        }

        if(!password){
            Form.passwordError="please enter the password"
        }
        else if(password.length>20){
            Form.passwordError="please enter the less than 20 characters"
        }
        return Form
    }
    return(
        <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="username">Email address:</label>
          <input type="text" className="form-control" id="username" ref={inputRef}/>
          <span style={{color:'red'}}>{formErrors?.usernameError}</span>
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input type="password" className="form-control" id="pwd" ref={passwordRef}/>
          <span style={{color:"red"}}>{formErrors?.passwordError}</span>
        </div>
        
        <button type="submit" className="btn btn-default">
          Submit
        </button>
        {apiErr && <p style={{color:"red"}}>{apiErr}</p>}
      </form>
      
    )
}
export default UncontrolledComponent