import React from "react"


const Button=(prop)=>{
    console.log("child re-render",prop.text)
    const{text="button",onPress}=prop
    const buttonStyle={backgroundColor:"red",color:"white"}
    return(
        <button style={buttonStyle} onClick={onPress}>{text}</button>
    )
}
export default React.memo(Button)