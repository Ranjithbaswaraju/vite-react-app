

import React, { useState } from "react";

const CrudOperations=()=>{

    const[todos,setTodos]=useState([])
    const[input,setInput]=useState("")

    const InputHandler=(event)=>{
        setInput(event.target.value)

    }

    const addHandler=(event)=>{
        event.preventDefault()
        if(input){
            setTodos([...todos,input])
        }
        setInput("")
       
    }

    const deleteHandler=(ind)=>{
        const updatedTodo=   todos.filter((_,index)=>index!=ind)
        setTodos(updatedTodo)
        
    }
    




    return(
        <>
        <form onSubmit={addHandler}>
            <input value={input} onChange={InputHandler}/>
            <button type="submit">ADD TODO</button>
           
        </form>
        {
                todos?.map((eachItem,index)=>{
                    return(
                        <>
                        <h3>{eachItem}</h3>
                        <button onClick={()=>deleteHandler(index)}>DELETE</button>
                        <button>UPDATE</button>
                        </>
                    )
                })
            }
        
        </>
    )
}
export default CrudOperations