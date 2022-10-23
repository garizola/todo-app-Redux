import React from "react";
import styled from 'styled-components';
import './TodoListItem.css';

const TodoItemContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    background: #fff;
    border-radius: 8px;
    margin-top: 0px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
    display: flex;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 50px;
    font-size: min(16px, 2.8vw);
    margin-bottom: 20px;

`;

const TodoItemContainerRedWarning = styled(TodoItemContainer)`
    border-bottom: ${props => (new Date(props.createdAt) > new Date(Date.now() - 8640000 * 2) 
        ? 'none'
        : '3px solid red')};
`;


const TodoListItem = ( { todo, onRemovePressed, onCompletedPressed }) => {
    const Container = todo.isCompleted ? TodoItemContainer : TodoItemContainerRedWarning
    return (
        <Container createdAt={todo.createdAt}>
            <div className="text-cont">
                <h3>{todo.text}</h3>
                <p>
                    Created At:&nbsp;
                    {(new Date(todo.createdAt)).toLocaleDateString()}
                </p>
            </div>
            
            <div className="buttons-container">
                {todo.isCompleted
                ? null
                : <button onClick={() => onCompletedPressed(todo.id)} className="completed-button">
                    Move to Completed
                    </button>
                
                }
                


                <button 
                onClick={() => onRemovePressed(todo.id)}  
                className="remove-button">Remove</button>
            </div>
            
        </Container>
    );
}

export default TodoListItem;