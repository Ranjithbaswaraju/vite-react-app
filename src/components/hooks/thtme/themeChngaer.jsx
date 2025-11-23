// import React, { useCallback, useState } from "react";

// const Ranjith=()=>{

//   const[light,setLight]=useState(true)

//   const backgroundHandler=useCallback(()=>{
//     setLight((light)=>(!light))
//   })

//   const theme=light?
//   {
//     background:"white" , color:"black"
//   }:
//   {
//     background:"black" ,color:"white"
//   }

//   return(
//     <div style={{background:theme.background,color:theme.color,height:'100vh',width:'100vw'}}>
//       <p>The background colo is {light?"white":'dark'}</p>
//       <button onClick={backgroundHandler}>Click Here</button>
//     </div>
//   )
// }
// export default Ranjith

import React, { useCallback, useState } from "react";

const Ranjith=()=>{
  const[light,isLight]=useState(true)

  const handler=useCallback(()=>{
    isLight((light)=>(!light))
  })

  const theme=light ?
  {
    background:'white' ,color:'black'
  }:
  {
    background:'black'  ,color:'white'
  }


  return(
    <div style={{background:theme.background,color:theme.color,height:'100vh',width:'100vw'}}>
      <p>The background color : {light?"White":"Dark"}</p>
      <button onClick={handler}>Click Here</button>
    </div>
  )
}
export default Ranjith;