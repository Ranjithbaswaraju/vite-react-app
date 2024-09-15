import React, { useState } from "react";

function CrudExample() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    const [selectedItem, setSelectedItem] = useState(null);

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const addTodo = (event) => {
        event.preventDefault();
        if (input) {
            setTodos([...todos, input]);
        }
        setInput("");
    };

    const updatedTodo = (event) => {
        event.preventDefault();
        const todosCopy=[...todos]
        todosCopy[selectedItem]=input
        setTodos(todosCopy)
        setInput("")
        setSelectedItem(null)
    };

    const handleDelete = (ind) => {
        const updatedTodos = todos.filter((_, index) => index != ind);
        setTodos(updatedTodos);
    };

    const handleUpdate = (ind) => {
        setSelectedItem(ind);

        const value=todos[ind]
        setInput(value)
    };

    return (
        <>
            <form onSubmit={selectedItem || selectedItem===0 ? updatedTodo : addTodo}>
                <input type="text" value={input} onChange={handleChange} />
                <button type="submit">
                    {selectedItem|| selectedItem===0? "Update Todo" : "Add Todo"}
                </button>

                <h3>My Todos</h3>
            </form>

            {todos?.map((eachTodo, index) => (
                <div key={index}>
                    <h2>{eachTodo}</h2>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                    <button onClick={() => handleUpdate(index)}>Update</button>
                </div>
            ))}
        </>
    );
}

export default CrudExample;
