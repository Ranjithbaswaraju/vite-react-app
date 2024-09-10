import { useContext } from "react"
import Navbar from "../components/navbar/navbar"
import { UserDeatails } from "../navigations/navigation-stack"


const AboutScreen=()=>{

     const{darkHandler,salaryHandler,resetsalaryHandler,decreasesalaryHandler}=useContext(UserDeatails)

     const changeHandler=()=>{
        darkHandler()
     }
     

    return(
        <>
        {/* <Navbar/> */}
        <h3>Welcome to about screen</h3>
        <button onClick={changeHandler}>Change Theme</button>
        <button onClick={salaryHandler}>Increment  salary</button>
        <button onClick={resetsalaryHandler}>Reset  salary</button>
        <button onClick={decreasesalaryHandler}>Decrement   salary</button>
        </>
    )
}
export default AboutScreen