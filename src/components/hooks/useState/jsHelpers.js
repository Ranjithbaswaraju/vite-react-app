
export const creatTodoList=()=>{
    const todos=[]

    for(let i=1;i<=10;i++){
        const myObject={
            id:i,
            text:`Item ${i}`
        }
        todos.push(myObject)
    }
    console.log(todos)
    return todos
}
creatTodoList()



