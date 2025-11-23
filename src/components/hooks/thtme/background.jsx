
// import React, { useState } from "react";

// const EvenOddBackground=()=>{
//   const[number,setNumber]=useState("")

//   const chnageHandler=(event)=>{
//     setNumber(event.target.value)
//   }

//   const backgroundColor=number%2==0 ? "green" : "violet"
//   return(
//     <div style={{backgroundColor,height:'100vh',width:'100vw', display:'flex', justifyContent:'center',alignItems:"center"}}>
//         <input type="text" value={number} onChange={chnageHandler} placeholder="enter the number"/>
        
//     </div>
//   )
// }
// export default EvenOddBackground


import React, { useState } from "react";


const EvenOddBackground=()=>{
  const[number,setNumber]=useState("")


  const handler=(e)=>{
    setNumber(e.target.value)
  }

  let backgroundColor='white'
  if(number !== "" && !isNaN(number)){
    backgroundColor = number%2===0 ? 'black' :'violet'
  }

  return(
    <div style={{backgroundColor,height:'100vh',width:'100vw',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <input type='text' value={number} onChange={handler}/>
    </div>
  )

}
export default EvenOddBackground;
