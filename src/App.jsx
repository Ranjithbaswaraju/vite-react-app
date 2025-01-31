import React from "react";


const Grand=({message})=>{
  return(
    <>
    <h1>Grand Child Component</h1>
    <p>Last message: {message}</p>
    </>
  )
}

const Child=({message})=>{
  return(
    <>
    <h1>Child Component</h1>
    <Grand message={message}/>
    </>
  )
}


const Parent=({message})=>{
  return(
    <>
    <h1>Parent Component</h1>
    <Child message={message}/>
    </>   
  )
}


const App=()=>{
  const message="Hello World"
  return(
    <>
    <h1>App Component</h1>
    <Parent message={message}/>
    </>
  )
}
export default App