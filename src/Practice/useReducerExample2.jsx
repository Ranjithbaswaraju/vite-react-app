// import React, { act, useReducer, useState } from "react";


// const reducer=(state,action)=>{
//     switch(action.type){
//         case "INCREMENT_AGE":
//             return {...state,age:state.age+action.payload}

//         case "CHANGE_NAME":
//             return {...state,userName:action.payload}
//     }

// }
// const UserReducerExample2=()=>{

    
//     const[name,setName]=useState("")
//     const initialState={
//         userName:"ranjith",
//         age:1
//     }

//     const ageHandler=()=>{
//         dispatch({
//             type:"INCREMENT_AGE",
//             payload:2
//         })
//     }
//     const onsubmit=()=>{
//         dispatch({
//             type:"CHANGE_NAME",
//             payload:name
//         })
//     }

//     const enterHandler=(event)=>{
//         setName(event.target.value)
//     }
//     const[currentState,dispatch]=useReducer(reducer,initialState)

   
//     return(
//         <>
//         <h1>age:{currentState.age}</h1>
//         <h1>name:{currentState.userName}</h1>
//         <input type="text" value={name} onChange={enterHandler}/>
//         <button onClick={ageHandler}>Increase AGE</button>
//         <button onClick={onsubmit}>Change Name</button>
//         </>
//     )
// }
// export default UserReducerExample2

// import React, { useReducer, useState } from "react";

// const reducer=(state,action)=>{
//     switch(action.type){
//         case "INC":
//             return {...state,age:state.age+1}
//         case "change_name":
//             return {...state,username:action.payload}
//         default:
//             return state
//     }
// }
// const UserReducerExample2=()=>{
//     const[name,setName]=useState("")

//     const initialState={
//         username:"ranjith",
//         age:30
//     }
    
//     const[currentState,dispatch]=useReducer(reducer,initialState)
//     const handler=(event)=>{
//         setName(event.target.value)
//     }

//     const onSubmit=(event)=>{
//         event.preventDefault()
//         dispatch({
//             type:"change_name",
//             payload:name
//         })
//     }

//     const onClick=()=>{
//         dispatch({
//             type:"INC",
//             // payload:2
//         })
//     }

    
//     return(
//         <>
//         <p>age:{currentState.age}</p>
//         <p>name:{currentState.username}</p>
//         <input type="text" value={name} onChange={handler}/>
//         <button onClick={onClick}>Age Increase</button>
//         <button onClick={onSubmit}>Change Name</button>
//         </>

//     )
// }
// export default UserReducerExample2



import React, { act, useReducer, useState } from "react";

const reducer=(state,action)=>{
    switch(action.type){
        case "INC":
            return {...state,age:state.age+action.payload}
        case "Change_Name":
            return {...state,username:action.payload}
        default:
            return state
    }
}
const UserReducerExample2=()=>{

    const initialState={
        age:30,
        username:'ranjith',
        todos:["wake up at 8am","breakfast at 10am"]
    }
    const[name,setName]=useState("")
    const[currentState,dispatch]=useReducer(reducer,initialState)

    const handler=()=>{
        dispatch({
            type:'INC',
            payload:2
        })
    }
    
    const onsubmit1=()=>{
        dispatch({
            type:"Change_Name",
            payload:name
        })
    }

    const handler1=(event)=>{
        setName(event.target.value)
    }
    return(
        <>
        <p>Age:{currentState.age}</p>
        <button onClick={handler}>Increase Age</button>
    
        <p>Name:{currentState.username}</p>
        <input type="text" value={name} onChange={handler1}/>
        <button onClick={onsubmit1}>Change Name</button>

        
        </>
    )
}
export default UserReducerExample2