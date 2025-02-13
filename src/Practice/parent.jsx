import React, { useState } from "react";
import ChildComponent from "./child";

const ParentComponent=()=>{
    const[data,setData]=useState("")

    const handleClick=(value)=>{
        setData(value)
    }
    return(
        <div>
            <h1>Parent Component</h1>
            <p>Data from Child:{data}</p>
            <ChildComponent sendData={handleClick}/>
        </div>
    )
}
export default ParentComponent