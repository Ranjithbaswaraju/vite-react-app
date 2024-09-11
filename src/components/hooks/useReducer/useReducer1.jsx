

import React, { useReducer, useState } from "react";

function UseReducerExample() {
    const reducer = (state, action) => {
        switch (action.type) {
            case "INCREMENT_AGE":
                return { ...state, age: state.age + 1 };
            case "DECREMENT_AGE":
                return { ...state, age: state.age - action.payload };
            case "CHANGE_NAME":
                return { ...state, username: action.payload };
            case "ADD_TODO":
                return {
                    ...state,
                    todos: [
                        ...state.todos,
                        { id: state.todos.length + 1, text: action.payload.text, age: action.payload.age }
                    ]
                };
            case "DELETE_TODO":
                return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
            case "UPDATE_TODO":
                return {
                    ...state,
                    todos: state.todos.map(todo =>
                        todo.id === action.payload.id
                            ? { ...todo, text: action.payload.text, age: action.payload.age }
                            : todo
                    )
                };
            default:
                return state;
        }
    };

    const initialState = {
        username: "raju",
        age: 33,
        todos: [],
        homeAdress: {}
    };

    const [currentState, dispatch] = useReducer(reducer, initialState);
    const [name, setName] = useState("");
    const [enteredTodo, setEnteredTodo] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");
    const [editAge, setEditAge] = useState("");

    const incrementHandler = () => {
        dispatch({ type: "INCREMENT_AGE", payload: 1 });
    };

    const decrementHandler = () => {
        dispatch({ type: "DECREMENT_AGE", payload: 4 });
    };

    const nameHandler = (event) => {
        setName(event.target.value);
    };

    const onSubmit = () => {
        if (name) {
            dispatch({ type: "CHANGE_NAME", payload: name });
        }
    };

    const todoHandler = (event) => {
        setEnteredTodo(event.target.value);
    };

    const ageHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const onSubmitTodo = () => {
        if (enteredTodo && enteredAge) {
            dispatch({
                type: "ADD_TODO",
                payload: { text: enteredTodo, age: enteredAge }
            });
            setEnteredTodo("");
            setEnteredAge("");
        }
    };

    const deleteHandler = (id) => {
        dispatch({ type: "DELETE_TODO", payload: id });
    };

    const startEdit = (id, text, age) => {
        setEditId(id);
        setEditText(text);
        setEditAge(age);
    };

    const updateHandler = () => {
        if (editText && editAge) {
            dispatch({
                type: "UPDATE_TODO",
                payload: { id: editId, text: editText, age: editAge }
            });
            setEditId(null);
            setEditText("");
            setEditAge("");
        }
    };

    return (
        <>
            <input type='text' value={enteredTodo} onChange={todoHandler} placeholder="Enter Todo" />
            <input type="text" value={enteredAge} onChange={ageHandler} placeholder="Enter Age" />
            <button onClick={onSubmitTodo}>ADD TODO</button>

            {editId && (
                <>
                    <input
                        type='text'
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        placeholder="Edit Todo"
                    />
                    <input
                        type="text"
                        value={editAge}
                        onChange={(e) => setEditAge(e.target.value)}
                        placeholder="Edit Age"
                    />
                    <button onClick={updateHandler}>UPDATE TODO</button>
                </>
            )}

            <table className="table">
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>Action</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {currentState.todos.map(eachTodo => (
                        <tr key={eachTodo.id}>
                            <td>{eachTodo.text}</td>
                            <td>{eachTodo.age}</td>
                            <td>
                                <button onClick={() => deleteHandler(eachTodo.id)}>DELETE</button>
                            </td>
                            <td>
                                <button onClick={() => startEdit(eachTodo.id, eachTodo.text, eachTodo.age)}>EDIT</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default UseReducerExample;
