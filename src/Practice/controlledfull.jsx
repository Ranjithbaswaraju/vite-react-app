
import React from "react";
import { useState } from "react";

const ControlledComponentFull=()=>{
    const[model,setModel]=useState("")
    const[modelErr,setModelErr]=useState("")
    const[mobileNumber,setMobileNumber]=useState("")
    const[mobileErr,setMobileErr]=useState("")
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

            if(modelErr || mobileErr){
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




    const mobileHandler=(event)=>{
        const mobile=event.target.value
        setMobileNumber(mobile)

        const error=mobileValidations(mobile)
            if(error){
                setMobileErr(error)
            }
            else{
                setMobileErr("")
            }
    }


    const mobileValidations=(value)=>{
       let  err=""

        const mobileRegex=/[6-9][0-9]{9}$/
        if(!value){
            err="please enter mobile number"
        }
        else if(!mobileRegex.test(value)){
            err="Enter proper mobile NUmber"
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

  <div className="form-group">
    <label htmlFor="phone">Mobile Number :</label>
    <input type="number" className="form-control" id="phone" value={mobileNumber} onChange={mobileHandler} />
    {mobileErr && <p style={{color:"red"}}>{mobileErr}</p>}
  </div>
  
  <button type="submit" className="btn btn-default">
    Submit
  </button>
</form>

        </>
    )
}
export default ControlledComponentFull