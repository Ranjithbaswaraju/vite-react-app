import { useState } from "react";
import { creatTodoList } from "./jsHelpers";


const CustomTodo=()=>{

    const[todos,setTodos]=useState(creatTodoList())

    const addTodoHandler=()=>{
        const currentLength=todos.length
        const myObject={
            id:currentLength+1,
            text:`item ${currentLength+1}`
        }

        //Here we are updating the values into todos from the myObject

        setTodos([...todos,myObject])
    }
    const deleteHandler=(targetid)=>{
        const filteredItems=todos.filter(eachTodo=>eachTodo.id!=targetid)
        setTodos(filteredItems)
    }

    //For deleting the buttons

     
    const updateHandler = (id) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, text: `item updated ${id}` };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };


    return(
        <>
        <h3>Custom todo</h3>
        <button onClick={addTodoHandler} >Add</button>
        <ol>
        {
            todos.map(eachTodo=>{
                const{id,text}=eachTodo
                
                return(
                    <>
                    <li key={eachTodo.id}>
                        {eachTodo.text}
                    </li>
                    <button onClick={()=>deleteHandler(id)}>Delete item</button>
                    <button onClick={()=>updateHandler(id)}>Update Item</button>
                    </>
                    
                )
            })
        }
        </ol>
        </>
    )
}
export default CustomTodo;