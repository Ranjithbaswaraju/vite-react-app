

import React, { useCallback, useState } from "react";
import MainHeading from "../../../header/header";
import Button from "../../../../src/Button/button"; 

function UseCallbackExample(){
    const[toggle,setToggle]=useState(false)

    const [age,setAge]=useState(10)

    const toggleHandler= useCallback(()=>{
        setToggle(!toggle)
    },[toggle])

    const ageHandler=useCallback(()=>{
        setAge(age+1)
    },[age])
   

   
    return(

        <>
        {
            toggle?<h2>Welcome user</h2>:<h2>Please login</h2>
        }
        <MainHeading/>
        {/* <button onClick={toggleHandler}>Click Toggle</button> */}

        <h2>current age{age}</h2>
        <Button text={"Toggle"} onPress={toggleHandler}/>
        
        <Button text={"age"} onPress={ageHandler}/>
        
        </>

    )
}
export default UseCallbackExample