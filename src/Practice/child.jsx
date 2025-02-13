import React from "react";


const ChildComponent=({sendData})=>{
    return(
        <div>
            <p>Child Component</p>
            <button onClick={()=>sendData("bye")}>Send Data</button>
        </div>
    )
}
export default ChildComponent