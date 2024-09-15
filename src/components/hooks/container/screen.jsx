

import React from "react";

function Screen({age,ageEvenChecker,salary,setSalaryHandler,setAgeHandler}){
    return(

       <>
       <h2>{age}{ageEvenChecker}</h2>
       <h2>{salary}</h2>

       <button onClick={setSalaryHandler}>Increase Salary</button>
       <button onClick={setAgeHandler}>Decrease salary</button>
       
       </>
    )
}
export default Screen