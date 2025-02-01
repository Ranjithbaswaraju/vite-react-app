import React, { createContext,useContext } from "react";

import ChildComponent from "./Practice/contextapi";
export const MessageContext=createContext()

const App = () => {
  const message="Ranjith"
  return(
    <>
    <MessageContext.Provider value={message}>
      <h1>Hello</h1>
    <ChildComponent/>
    </MessageContext.Provider>
    </>
  )
  

 
}

export default App;
