



import Button from "../Button/button";
import React, { useCallback, useState } from "react";

const UseCallback=()=>{
    const[toggle,setToggle]=useState(false)
    const[age,setAge]=useState(10)

        const toggleHandler=useCallback(()=>{
            setToggle(!toggle)
        },[toggle])
      
        const ageHandler=useCallback(()=>{
            setAge(age+1)
        },[age])
    return(

        <>
        {
            toggle ? <h1>Hello</h1>:<h1>Bye</h1>
        }
            {/* <button onClick={toggleHandler} >Click toggle</button> */}
            
        <h1>Current Age :{age}</h1>
            <Button text={"Toggle"} onPress={toggleHandler}/>

            <Button text={"Age"} onPress={ageHandler}/>
        </>
    )
}
export default UseCallback