
import React, { createContext } from "react";
import Child from "./Practice/contextapi";

const Welcome=createContext()

const App=()=>{
  const message='Hello world'
  return(
    <>
    <Welcome.Provider value={message}>
      <Child/>
    </Welcome.Provider>
    </>
  )
}
export default App
export {Welcome}