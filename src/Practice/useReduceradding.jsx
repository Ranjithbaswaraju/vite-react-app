import React, { act, Fragment, useReducer, useState } from "react";


const reducer=(state,action)=>{
    switch(action.type){
       
        case "CHANGE_NAME":
            return {...state,userName:action.payload}

        case "ADD_TODO":

            return {...state,todos:[...state.todos,action.payload]}
    }

}
const UserReducerExample4=()=>{

    
    const[name,setName]=useState("")
    const[enteredTodo,setenteredTodo]=useState("")
    const initialState={
        userName:"ranjith",
        age:1,
        todos:[]
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


    const todoHandler=(event)=>{
        setenteredTodo(event.target.value)
    }

    const addHandler=()=>{
        if(enteredTodo){
            dispatch({
                type:"ADD_TODO",
                payload:enteredTodo
            })
            
        }
        setenteredTodo("")
    }
   
    return(
        <>
    
        <h1>name:{currentState.userName}</h1>
        <input type="text" value={name} onChange={enterHandler}/>

        <button onClick={onsubmit}>Change Name</button>


        <input type="text" onChange={todoHandler} value={enteredTodo} />
        <button onClick={addHandler}>Add Item</button>
        {
            currentState.todos.map((eachItem)=>{
                return(
                    <Fragment>
                        <h3>{eachItem}</h3>
                    </Fragment>
                )
            })
        }
        
        </>
    )
}
export default UserReducerExample4