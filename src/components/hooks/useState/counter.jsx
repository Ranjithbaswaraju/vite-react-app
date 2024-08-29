
import React, {useState} from "react";

const Counter=()=>{
    const[age,setAge]=useState(10)

    const IncrementHandler=()=>{
        setAge(age+1)
    }
    const ResetHandler=()=>{
        setAge(0)
    }
    const decrementHandler=()=>{
        if(age>0){
            setAge(age-1)

        }
        else{
            alert("Age is not negative")
        }
        
    }
    return(
        <>
        <h3>Hello</h3>
        <h3>The current age is:{age}</h3>
        <button onClick={IncrementHandler}>Increment</button>
        <button onClick={ResetHandler}>Reset</button>
        <button onClick={decrementHandler}>Decrement</button>

        </>
    )
}
export default Counter;