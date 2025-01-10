import React from "react";


const MainHeading=(prop)=>{
    console.log("Clicked")
    const{heading}=prop
    return<>
    <h1>{heading}</h1>
    </>
}
export default React.memo(MainHeading)



export const SecondaryHeading=(prop)=>{
    const{heading}=prop
    return(
        <>
        <h2>{heading}</h2>
        </>
    )
}