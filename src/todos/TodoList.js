import React, { useEffect } from "react";
import { connect } from "react-redux";
import './TodoList.css';
import NewTodoForm from "./NewTodoForm";
import { removeTodo, markTodoAsCompleted } from "./actions";
import { loadTodos } from "./thunks";
import { displayAlert } from "./thunks";
import TodoListItem from "./TodoListItem";
import { isLoading } from "./reducers";

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos}) =>  {
    useEffect(() => {
        startLoadingTodos();
    }, []);

    const loadingMessage = <div>Loading todos....</div>;
    const content = (
        <div className="list-wrapper">
            <NewTodoForm />
            {todos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed} onCompletedPressed={onCompletedPressed} />)}
        </div>
    );

    return isLoading ? loadingMessage : content;
};




const mapStateToProps = state => ({
    
    todos: state.todos,
    isLoading: state.isLoading,
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
    onDisplayAlertClicked: () => dispatch(displayAlert()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);