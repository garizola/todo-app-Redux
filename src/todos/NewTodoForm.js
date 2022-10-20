import React, { useState } from "react";
import './NewTodoForm.css';

const NewTodoForm = () => {
    const [inputValue, setInputValue] = useState('');
    

    return (
        <div className="new-todo-form">
            <input 
                className="new-todo-input" 
                type="text" 
                placeholder="Type you new todo...."
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}/>
            <button className="new-todo-button">Create New Todo</button>
        </div>

    );
};

export default NewTodoForm;