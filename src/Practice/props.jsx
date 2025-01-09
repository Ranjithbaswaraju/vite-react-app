

import { Button } from "bootstrap"
import React from "react"
const CustomButton=(prop)=>{
    const{text,onPress,bgColor}=prop
    return(
        <>
        <button style={{backgroundColor:bgColor}} onPress={onPress}>{text}</button>
        </>
    )
}
export default CustomButton