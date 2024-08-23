

const Button=(prop)=>{
    const{text="button",onPress}=prop
    const buttonStyle={backgroundColor:"red",color:"white"}
    return(
        <button style={buttonStyle} onClick={onPress}>{text}</button>
    )
}
export default Button