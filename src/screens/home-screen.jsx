import React, { useContext } from "react"
import UseEffectExample from "../components/hooks/useEffect/useEffcetEx"
import Navbar from "../components/navbar/navbar"
import { UserDeatails } from "../navigations/navigation-stack"
// import UseEffectExample from "../components/hooks/useEffect/useEffectEx"

import withProfile from "../hoc/withProfile.jsx"
import withCounter from "../hoc/withCounter.jsx"


// const Homescreen=({profile})=>{
//     console.log(profile.firstName)

//     // const{salary}=useContext(UserDeatails)
//     return(
//         <>
      
//         {/* <h3 style={{textAlign:'center'}}> Welcome to home screen{salary}</h3> */}
//         <h5>welcoe to home screen {profile.firstName}</h5>
//         </>
//     )
// }
// export default withProfile(Homescreen)

const Homescreen=({count,incrementHandler})=>{
    // console.log()

    // const{salary}=useContext(UserDeatails)
    return(
        <>
        <h2>{count}</h2>
        <button onMouseOver={incrementHandler}>Increment Button</button>
        </>
    )
}
// export default withCounter(Homescreen)

export default React.memo(withCounter(Homescreen))