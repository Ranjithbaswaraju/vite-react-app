import { useEffect, useState } from "react";
import { useRef } from "react";

const UseEffectExample3=()=>{

    const[salary,setSalary]=useState(1000);
    const salaryRef= useRef(0)


    useEffect(()=>{
        console.log("useEffect triggering.....")
        salaryRef.current=salary
    },[salary])

    const IncrementHandler=()=>{
        setSalary(salary+100)

        
    }



    return(
        <>
        <h2>Current state--{salary}</h2>
        <h5>Previous state-- {salaryRef.current}</h5>
        <button onClick={IncrementHandler}>Increment</button>
        
        </>
    )


}
export default UseEffectExample3;
