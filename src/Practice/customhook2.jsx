import React from "react";
import UseCounter from "./customhook1";

const Counterhelp=()=>{
    const{count,increment,decrement,reset}=UseCounter(10)

    return(
        <div>
            <h2>Counter:{count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default Counterhelp