// import React from "react";


// const Grand=({message})=>{
//   return(
//     <>
//     <h1>Grand Child Component</h1>
//     <p>Last message: {message}</p>
//     </>
//   )
// }

// const Child=({message})=>{
//   return(
//     <>
//     <h1>Child Component</h1>
//     <Grand message={message}/>
//     </>
//   )
// }


// const Parent=({message})=>{
//   return(
//     <>
//     <h1>Parent Component</h1>
//     <Child message={message}/>
//     </>   
//   )
// }


// const App=()=>{
//   const message="Hello World"
//   return(
//     <>
//     <h1>App Component</h1>
//     <Parent message={message}/>
//     </>
//   )
// }
// export default App


import React from "react";


const Grand=({ranjith})=>{
  return(
    <>
    <p>{ranjith}</p>
    </>
  )
}
const Child=({ranjith})=>{
  return(
    <>
    <h1>GrandChild</h1>
    <Grand ranjith={ranjith}/>
    </>
  )
}

const Parent=({ranjith})=>{
  return(
    <>
    <h1>Parent Component</h1>
    <Child ranjith={ranjith}/>
    </>
  )
}
const App=()=>{
  const message='RANJITH'
  return(
    <>


    <h1>App component</h1>
    <Parent ranjith={message}/>
    </>
  )
}
export default App;