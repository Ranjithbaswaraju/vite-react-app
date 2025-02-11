

// import axios from "axios";
// import React, { useRef, useState } from "react";


// const TableUncontrolledComponent=()=>{

//     const usernameRef=useRef("")
//     const passwordRef=useRef("")
//     const [errors,setErrors]=useState({})
//     const[apiError,setApiError]=useState("")

//     const[userData,setUserData]=useState([])
//     const onSubmit=(event)=>{
//         event.preventDefault()

//         const usernameEntered=usernameRef.current.value
//         const passwordEntered=passwordRef.current.value

//         const formErrors=validations(usernameEntered,passwordEntered)
//         console.log(formErrors)

//         if(Object.keys(formErrors).length>0){
//             //Trigger Error
//             setErrors(formErrors)
//         }
//         else{
//             loginApi(usernameEntered,passwordEntered)
//         }
//     }


//     const validations=(username,password)=>{
//         const Data={}

//         if(!username){
//             Data.usernameError="please enter the username"
//         }else if(username.length>20){
//             Data.usernameError="Please enter the lessthan 20 characters"
//         }

//         if(!password){
//             Data.passwordError="Please enter the password"
//         }
//         else if(password.length>20){
//             Data.passwordError="Please enter lessthan 20 characters"
//         }
//         return Data
//     }

//     const loginApi=async(username,password)=>{
//         try{
//             const response=await axios.post('https://dummyjson.com/auth/login',{
//                 "username":username,
//                 "password":password
//             })
//             console.log(response)
//             setErrors({})
//             setApiError("")
//             setUserData((prevData)=>[...prevData, { username, password }])
//             alert("Login succesfully")
//         }catch(err){
//             console.log(err)
//             setApiError("Username or password not match")
//         }
//     }
//     return(
//         <>
//             <form onSubmit={onSubmit}>
//   <div className="form-group">
//     <label htmlFor="username">Email address:</label>
//     <input type="text" className="form-control" id="username" ref={usernameRef} />
//     <span style={{color:"red"}}>{errors?.usernameError}</span>
//   </div>
//   <div className="form-group">
//     <label htmlFor="pwd">Password:</label>
//     <input type="password" className="form-control" id="pwd" ref={passwordRef} />
//     <span style={{color:"red"}}>{errors?.passwordError}</span>
//   </div>
//   <button type="submit" className="btn btn-default">
//     Submit
//   </button>
//   {apiError && <p style={{color:'red'}} >{apiError}</p>}
// </form>

// {
//     userData.length>0 && (
//         <div>
//             <h3>Login Details</h3>
//             <table className="table table-bordered">
//                 <thead>
//                     <tr>
//                         <th>*</th>
//                         <th>UserName</th>
//                         <th>Password</th>
//                     </tr>
//                 </thead>
//                 <tbody>
                   
//                     {
//                         userData.map((data,index)=>(
//                             <tr key={index}>
//                                 <td>{index+1}</td>
//                                 <td>{data.username}</td>
//                                 <td>{data.password}</td>
//                             </tr>
//                         ))
//                     }
//                 </tbody>
//             </table>
//         </div>
//     )
// }
//         </>
//     )
// }
// export default TableUncontrolledComponent


import axios from "axios";
import React, { useRef, useState } from "react";

const TableUncontrolledComponent=()=>{
    const inputRef=useRef(null)
    const passwordRef=useRef(null)
    const[formErrors,setFormErrors]=useState({})
    const[apiErr,setApiErr]=useState("")
    const[data,setData]=useState([])

    const onSubmit=(event)=>{
        event.preventDefault()

        const userNameEntered=inputRef.current.value
        const passwordEntered=passwordRef.current.value

        console.log(userNameEntered)
        console.log(passwordEntered)

        const formErrors=validations(userNameEntered,passwordEntered)
        console.log(formErrors)

        if(Object.keys(formErrors).length>0){
            setFormErrors(formErrors)
        }
        else{
            loginApi(userNameEntered,passwordEntered)
            setFormErrors({})
        }


    }

    const validations=(username,password)=>{
        const Form={

        }

        if(!username){
            Form.usernameError="Please enter the username"
        }
        else if(username.length>20){
            Form.usernameError="please enter less than 20 characters"
        }

        if(!password){
            Form.passwordError="please enter the password"
        }
        else if(password.length>20){
            Form.passwordError="please enter the less than 20 characters"
        }
        return Form

    }

    const loginApi=async(username,password)=>{
        try{
            const response=await axios.post('https://dummyjson.com/auth/login',{
                "username":username,
                "password":password
            })
            console.log(response)
            setApiErr("")
            setData((prevData)=>[...prevData,{username,password}])
            alert("Login succesfull")
            
        }
        catch(err){
            console.log(err)
            setApiErr("Please enter the valid username and password")
        }
    }

    return(
        <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="username">Email address:</label>
          <input type="text" className="form-control" id="username" ref={inputRef}/>
          <span>{formErrors.usernameError}</span>
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input type="password" className="form-control" id="pwd" ref={passwordRef}/>
          <span>{formErrors.passwordError}</span>
        </div>
        
        <button type="submit" className="btn btn-default">
          Submit
        </button>
        {apiErr && <p style={{color:'red'}}>{apiErr}</p>}

        {
            data.length>0 && (
                <div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>username</th>
                                <th>password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((data,index)=>(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{data.username}</td>
                                        <td>{data.password}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            )
            
        }
      </form>
      
    )
}
export default TableUncontrolledComponent