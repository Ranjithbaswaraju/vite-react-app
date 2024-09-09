
import { useNavigate } from "react-router-dom"

const Invalidscreen=()=>{

    const navigate=useNavigate()

    const handleNavigation=()=>{
        navigate("/")
    }
    return(
        <>


        
        <h3>Page Not fund 404</h3>

        <button onClick={handleNavigation}> Back to home</button>
    
        </>
    )
}
export default Invalidscreen