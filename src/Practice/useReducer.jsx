// import React, { useReducer } from "react";
// const reducer=(state,action)=>{
//     switch(action.type){
//         case "INCREMENT_AGE":
//             return {...state,age:state.age+1}
//         default:
//             return state
//     }
// }
// const UserReducerExample=()=>{
//     const initialState={
//         username:"raju",
//         age:0,
//         todos:["woke up at 8am", "Breakfast at 10am"],
//         homeaddress:{}
//     }
//     const[currentState,dispatch]=useReducer(reducer,initialState)
//     const incrementHandler=()=>{
//         dispatch({
//             type:"INCREMENT_AGE",
//             payload:2
//         })
//     }
//     return(
//         <>
//         <h1>{currentState.username}</h1>
//         <h1>{currentState.age}</h1>
//         <button onClick={incrementHandler}>Increment age</button>
//         </>
//     )
// }
// export default UserReducerExample





import React, { useReducer } from "react";
const reducer=(state,action)=>{
    switch(action.type){
        case "INC":
            return {...state,age:state.age+action.payload}
        default:
            return state

    }
}

const UserReducerExample=()=>{
    const initialState={
        age:30
    }
    const[currentState,dispatch]=useReducer(reducer,initialState)

    const handler=()=>{
        dispatch({
            type:'INC',
            payload:2
        })
    }
    return(
    <>
    <p>{currentState.age}</p>
    <button onClick={handler}>Increment age</button>

    </>
    )
}
export default UserReducerExample