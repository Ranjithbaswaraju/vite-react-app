import React, { useContext } from "react"
import UseEffectExample from "../components/hooks/useEffect/useEffcetEx"
import Navbar from "../components/navbar/navbar"
import { UserDeatails } from "../navigations/navigation-stack"
// import UseEffectExample from "../components/hooks/useEffect/useEffectEx"

import withProfile from "../hoc/withProfile.jsx"
import withCounter from "../hoc/withCounter.jsx"
import useAxios from "../components/hooks/customHooks/useAxios.jsx"
import { json } from "react-router-dom"


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
    const [recipes,error,loading]=useAxios('https://dummyjson.com/recipes')
    console.log(recipes,"recipesitems")

    if(loading){
        return<h3>please wait.....</h3>
    }
    if(error){
        return<h2>{JSON.stringify(error)}</h2>
    }
    return(
        <>
        <h2>{count}</h2>
        <button onMouseOver={incrementHandler}>Increment Button</button>
        </>
    )
}
// export default withCounter(Homescreen)

export default React.memo(withCounter(Homescreen))