import React,{useState} from "react"

const SwitchFunction=()=>{

    const[age,setAge]=useState(10)

    const ageHandler=(type)=>{
        switch(type){
            case "INCREMENT":
                setAge(age=>age+1)
                setAge(age=>age+1);
                //Here we are sending the age is an argument and update it frim it only this is prefered 
                break
            case "DECREMENT":
                if(age>0){
                    setAge(age-1)
                }else{
                    alert("The age is not negative")
                }
                break
            case "RESET":setAge(0);break
            default:
                break
        }
    }

    return(
    <>
    <h3>The current age is:{age}</h3>
    <button onClick={()=>ageHandler("INCREMENT")}>Increment</button>
    <button onClick={()=>ageHandler("RESET")}>Rest</button>
    <button onClick={()=>ageHandler("DECREMENT")}>Decrement</button>
    </>

    )
}
export default SwitchFunction;