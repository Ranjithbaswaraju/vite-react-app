// import React, { useState } from "react";

// const CrudUpdation=()=>{

//     const[input,setInput]=useState("")
//     const[todos,setTodos]=useState([])
//     const[selectedItem,setSelectedItem]=useState(null)

//     const inputHandler=(event)=>{
//         setInput(event.target.value)
//     }
//     const ADD_TODO=(event)=>{
//         event.preventDefault()
//         if(input){
//             setTodos([...todos,input])
//         }
//         setInput("")
//     }
//     const deleteHandler=(ind)=>{
//         const updatedTodo=todos.filter((_,index)=>index!=ind)
//         setTodos(updatedTodo)
//     }
//     const updateHandler=(ind)=>{
//         setSelectedItem(ind)
//         const inputValue=todos[ind]
//         setInput(inputValue)
//     }
//     const updateTodo=(event)=>{
//         event.preventDefault()
//         const todoCopy=[...todos]
//         todoCopy[selectedItem]=input
//         setTodos(todoCopy)
//         setSelectedItem("")
//         setInput("")

//     }
//     return(
//         <>
//         <form onSubmit={selectedItem || selectedItem===0 ? updateTodo : ADD_TODO}>
//         <input type="text" value={input} onChange={inputHandler}/>
//         <button type="submit">{selectedItem || selectedItem===0 ? "updateTodo" : "ADD_TODO"}</button>
//         </form>
//         {
//             todos?.map((item,index)=>{
//                 return(
//                     <>
//                     <li>{item}</li>
//                     <button onClick={()=>deleteHandler(index)}>DELETE_TODO</button>
//                     <button onClick={()=>updateHandler(index)}>UPDATE</button>
//                     </>
//                 )
//             })
//         }
//         </>
//     )
// }
// export default CrudUpdation

import React, { useState } from "react";

const CrudUpdation = () => {
    const[input,setInput]=useState("")
    const[todo,setTodo]=useState([])
    const[selectedItem,setSelectedItem]=useState(null)

    const inputHandler=(event)=>{
        setInput(event.target.value)
    }

    const addTodo=(e)=>{
        e.preventDefault()
        setTodo([...todo,input])
    }

    const deleteHandler=(ind)=>{
        const updatedTodo=todo.filter((_,index)=>index!=ind)
        setTodo(updatedTodo)
    }
    const updateHandler=(ind)=>{
        setSelectedItem(ind)
        const name=todo[ind]
        setInput(name)
    }
    const updateTodo=(e)=>{
        e.preventDefault()
        const copy=[...todo]
        copy[selectedItem]=input
        setTodo(copy)
        setSelectedItem("")
        setInput("")
    }
    return(

        <>
            <form onSubmit={selectedItem||selectedItem===0 ? updateTodo : addTodo}>
            <input type="text" value={input} onChange={inputHandler}/>
            <button type="submit">{selectedItem||selectedItem===0 ? "updateTodo" : "addTodo"}</button>
            
            </form>
            <ol>
            {
                todo?.map((item,index)=>{
                    return(
                        <>
                        <li key={index}>{item}</li>
                        <button onClick={()=>deleteHandler(index)}>DELETE</button>
                        <button onClick={()=>updateHandler(index)}>UPDATE</button>
                        </>
                    )
                })
            }
            </ol>
        </>
    )
}
export default CrudUpdation