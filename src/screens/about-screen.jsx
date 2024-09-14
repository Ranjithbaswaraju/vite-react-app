import { useContext } from "react"
import Navbar from "../components/navbar/navbar"
import { GlobalCounter, UserDeatails } from "../navigations/navigation-stack"
import { incrementAction } from "../navigations/counterHelper"


const AboutScreen=()=>{

     const{darkHandler,salaryHandler,resetsalaryHandler,decreasesalaryHandler}=useContext(UserDeatails)

    const {currentState,dispatch}=useContext(GlobalCounter)
    console.log(currentState)
     const changeHandler=()=>{
        darkHandler()
     }
     

    return(
        <>
        {/* <Navbar/> */}
        <h3>Welcome to about screen{currentState.count}</h3>
        <button onClick={changeHandler}>Change Theme</button>
        <button onClick={salaryHandler}>Increment  salary</button>
        <button onClick={resetsalaryHandler}>Reset  salary</button>
        <button onClick={decreasesalaryHandler}>Decrement   salary</button>
        </>
    )
}
export default AboutScreen