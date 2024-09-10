import { useContext } from "react"
import UseEffectExample from "../components/hooks/useEffect/useEffcetEx"
import Navbar from "../components/navbar/navbar"
import { UserDeatails } from "../navigations/navigation-stack"
// import UseEffectExample from "../components/hooks/useEffect/useEffectEx"




const Homescreen=()=>{

    const{salary}=useContext(UserDeatails)
    return(
        <>
      
        <h3 style={{textAlign:'center'}}> Welcome to home screen{salary}</h3>
        
        </>
    )
}
export default Homescreen