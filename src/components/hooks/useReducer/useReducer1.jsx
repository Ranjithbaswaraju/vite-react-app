
import React, { Fragment, useReducer, useState } from "react"



function UseReducerExample(){

const reducer=(state,action)=>{

    switch(action.type){
        case "INCREMENT_AGE":return {...state,age:state.age+1}
        case "DECREMENT_AGE":return {...state,age:state.age-action.payload}
        case "CHANGE_NAME":return {...state,username:action.payload}
        case "ADD_TODO" :return {...state,todos:[...state.todos,action.payload]}
        default:return state
    }

}
    
    const initialState={
        username:"raju",
        age:33,
        todos:["work up at 8am","Breakfast at 10am"],
        homeAdress:{}



    }
    const[curentState,dispatch]=useReducer(reducer,initialState)
    const[name,setName]=useState("")
    const[enteredTodo,setEnteredTodo]=useState("")


  const IncremntHandler=()=>{
    dispatch({
        type:"INCREMENT_AGE",
        payload:1
    })
  }
  const DecrementHandler=()=>{
    dispatch({
        type:"DECREMENT_AGE",
        payload:4
    })
  }

  const nameHandler=(event)=>{
    setName(event.target.value)
  }

  const onsubmit=()=>{
    if(name){
        dispatch({
            type:"CHANGE_NAME",
            payload:name
        })
    }
    
  }

  const todoHandler=(event)=>{
    setEnteredTodo(event.target.value)
  }
  const onsubmitTodo=()=>{
    if(enteredTodo){
        dispatch({
            type:"ADD_TODO",
            payload:enteredTodo
        })
    }
    setEnteredTodo("")
    
  }

    return(
        <>
        {/* <input type='text' value={name} onChange={nameHandler}/>
        <button onClick={onsubmit} >Submit</button>
        <h1>{curentState.username}</h1>
        <h3>{curentState.age}</h3>
        <button onClick={IncremntHandler}>Increment</button>
        <button onClick={DecrementHandler}>Decrement</button> */}



        <input type='text' value={enteredTodo} onChange={todoHandler}/>
        <button onClick={onsubmitTodo} >ADD TODO</button>


        {
            curentState.todos.map(eachTodo=>
            <Fragment key={eachTodo.id}>

                {
                  <h1>{eachTodo}</h1>
                  
                }
            </Fragment>)
        }
        </>
    )
}
export default UseReducerExample