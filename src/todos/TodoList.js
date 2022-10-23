import React, { useEffect } from "react";
// import styled from 'style-components';
import { connect } from "react-redux";
import './TodoList.css';
import NewTodoForm from "./NewTodoForm";
import { loadTodos, removeTodoRequest, markTodoAsCompletedRequest } from "./thunks";
import { displayAlert } from "./thunks";
import TodoListItem from "./TodoListItem";
import { getTodosLoading, getCompletedTodos, getIncompleteTodos  } from "./selectors";
// import { isLoading } from "./reducers";

const TodoList = ({ completedTodos, incompleteTodos, onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos}) =>  {
    useEffect(() => {
        startLoadingTodos();
    }, []);

    const loadingMessage = <div>Loading todos....</div>;
    const content = (
        <div className="list-wrapper">
            <NewTodoForm />
            <h2 className="incomp">Incomplete: </h2>
            {incompleteTodos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed} onCompletedPressed={onCompletedPressed} />)}
            <h2 className="comp">Completed: </h2>
            {completedTodos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed} onCompletedPressed={onCompletedPressed} />)}
        </div>
    );

    return isLoading ? loadingMessage : content;
};




const mapStateToProps = state => ({
    
    completedTodos: getCompletedTodos(state),
    incompleteTodos: getIncompleteTodos(state),
    isLoading: getTodosLoading(state),
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
    onDisplayAlertClicked: () => dispatch(displayAlert()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);