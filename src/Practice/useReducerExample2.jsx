import React, { act, useReducer, useState } from "react";


const reducer=(state,action)=>{
    switch(action.type){
        case "INCREMENT_AGE":
            return {...state,age:state.age+action.payload}

        case "CHANGE_NAME":
            return {...state,userName:action.payload}
    }

}
const UserReducerExample2=()=>{

    
    const[name,setName]=useState("")
    const initialState={
        userName:"ranjith",
        age:1
    }

    const ageHandler=()=>{
        dispatch({
            type:"INCREMENT_AGE",
            payload:2
        })
    }
    const onsubmit=()=>{
        dispatch({
            type:"CHANGE_NAME",
            payload:name
        })
    }

    const enterHandler=(event)=>{
        setName(event.target.value)
    }
    const[currentState,dispatch]=useReducer(reducer,initialState)

   
    return(
        <>
        <h1>age:{currentState.age}</h1>
        <h1>name:{currentState.userName}</h1>
        <input type="text" value={name} onChange={enterHandler}/>
        <button onClick={ageHandler}>Increase AGE</button>
        <button onClick={onsubmit}>Change Name</button>
        </>
    )
}
export default UserReducerExample2


