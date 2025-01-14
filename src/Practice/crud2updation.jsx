

// import React, { useState } from "react";

// const CrudUpdation=()=>{

//     const[todos,setTodos]=useState([])
//     const[input,setInput]=useState("")

//     const[selectedItem,setSelectedItem]=useState(null)

//     const InputHandler=(event)=>{
//         setInput(event.target.value)

//     }

//     const AddTodo=(event)=>{
//         event.preventDefault()
//         if(input){
//             setTodos([...todos,input])
//         }
//         setInput("")
       
//     }

//     const deleteHandler=(ind)=>{
//         const updatedTodo=   todos.filter((_,index)=>index!=ind)
//         setTodos(updatedTodo)
        
//     }
    
//     const updateHandler=(ind)=>{
//         setSelectedItem(ind)

//         const selected=todos[ind]  //Here we will get the selected while clicked on the update button the selected item will be showed in the input filed
//         setInput(selected)

//     }

//     const updateTodo=(event)=>{
//         event.preventDefault()  
        
        
//         const todosCopy=[...todos]  //getting the todos copy like what data there and stored in the todosCopy
//         todosCopy[selectedItem]=input   //after that above line the data in the todosCopy the selectedITem(index) should be filled with the new data that user want update(uodated data)
//         setTodos(todosCopy)
//         setInput("")
//         setSelectedItem("")

//     }


//     return(
//         <>
//         <form onSubmit={selectedItem || selectedItem===0 ? updateTodo: AddTodo }>
//             <input value={input} onChange={InputHandler}/>
//             <button type="submit">
//                 {
//                     selectedItem || selectedItem===0 ? "Update Todo"  : "Add Todo"
//                 }</button>
           
//         </form>
//         {
//                 todos?.map((eachItem,index)=>{
//                     return(
//                         <>
//                         <h3>{eachItem}</h3>
//                         <button onClick={()=>deleteHandler(index)}>DELETE</button>
//                         <button onClick={()=>updateHandler(index)}>UPDATE</button>
//                         </>
//                     )
//                 })
//             }
        
//         </>
//     )
// }
// export default CrudUpdation


import React, { useState } from "react";


const CrudUpdation=()=>{
    const[input,setINput]=useState("")
    const[todos,setTodos]=useState([])
    const[selectedITem,setSelectedItem]=useState(null)

    const inputHandler=(event)=>{
      
        setINput(event.target.value)
    }

const addTodo=(event)=>{
    event.preventDefault()
    setTodos([...todos,input])

    setINput("")
}

const deleteHandler=(ind)=>{

       const delete1= todos.filter((_,index)=>index!=ind)
        setTodos(delete1)

}
const updateHandler=(ind)=>{

    setSelectedItem(ind)
    const inputValue=todos[ind]
    setINput(inputValue)

}

const updateTodo=(event)=>{
    event.preventDefault()

    const todosCopy=[...todos]

    todosCopy[selectedITem]=input
    setTodos(todosCopy)
    setSelectedItem("")
    setINput("")


    
}

    return(
        <>
        <form onSubmit={selectedITem || selectedITem===0 ? updateTodo : addTodo}>

            <input type="text" placeholder="enter a name" value={input} onChange={inputHandler}/>
            <button type="submit">{selectedITem || selectedITem===0 ? "UPDATE TODO" : "ADD_TODO"}</button>

            
        </form>
        {
            todos.map((each,index)=>{
                return(
                    <>
                    <h3>{each}</h3>
                    <button onClick={()=>deleteHandler(index)}>DELETE</button>
                    <button onClick={()=>updateHandler(index)}>UPDATE</button>
                    </>
                )
            })
        }
        </>
        
       
    
    )

}
export default CrudUpdation

