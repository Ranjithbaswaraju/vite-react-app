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

// import React  from "react";

// const Grand=({message})=>{
//   return(
//     <h1>{message}</h1>
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
//   const message='Hello World'
//   return(
//    <>
//     <h1>App Component</h1>
//     <Parent message={message}/>
//    </>
//   )
// }
// export default App

import React from "react";


const GrandChildComponent=({ranjith})=>{
  return(
    <>
    <p>{ranjith}</p>
    </>
  )
}

const ChildComponent=({ranjith})=>{
  return(
    <>
    <h1>GrandChildComponent</h1>
  <GrandChildComponent ranjith={ranjith}/>
    </>
  )

}


const ParentComponent=({ranjith})=>{
  return(
    <>
    <h1>ChildComponent</h1>
  <ChildComponent ranjith={ranjith}/>
    </>
  )
}


const App=()=>{
  const message='Hello World'
  return(
    <>
    <h1>App Component</h1>
    <ParentComponent ranjith={message}/>
    </>
  )
}
export default App;

