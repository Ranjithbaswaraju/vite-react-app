import React, { createContext,useContext } from "react";
import CardComponent from "./Practice/card";
import CardAddition from "./Practice/card-add";
import ChildComponent from "./Practice/contextapi";






export  const MessageContext=createContext()

const App = () => {

  const message="Hello"
  return(
    <MessageContext.Provider value={message}>
      <h1>Hello World</h1>
      <ChildComponent/>
    </MessageContext.Provider>
  )

 
}

export default App;
