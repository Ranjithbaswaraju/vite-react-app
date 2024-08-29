import React,{useState} from "react"

const SwitchCounter=()=>{

    const[age,setAge]=useState(10)

    const ageHandler=(type)=>{
        switch(type){
            case "INCREMENT":
                setAge(age+1);break
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
export default SwitchCounter