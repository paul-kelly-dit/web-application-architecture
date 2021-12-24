import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, removeTodo, changeStatus } from './store/todos/actions';

const TodoList = (props) => {
    const [todoText, setTodoText] = useState('');

    return (
        <div>
            <p>{props.todos.length} Todos.</p>
            <ul>
                {props.todos.map((todo) => (
                    <li key={todo.id}>
                        <button
                            type="button"
                            onClick={() => {
                                props.removeTodo(todo.id);
                            }}
                        >
                            remove
                        </button>
                        <label
                            style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
                        >
                            <input
                                type="checkbox"
                                name={todo.id}
                                checked={Boolean(todo.done)}
                                onChange={(e) => {
                                    const { name, checked } = e.target;
                                    props.changeStatus(name, checked);
                                }}
                            />
                            {todo.text}
                        </label>
                    </li>
                ))}
            </ul>
            <input onChange={(e) => setTodoText(e.target.value)} value={todoText} />
            <button
                type="button"
                onClick={() => {
                    props.addTodo(todoText);
                    setTodoText('');
                }}
            >
                add
            </button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    todos: state.todos,
});

const mapDispatchToProps = {
    addTodo,
    removeTodo,
    changeStatus,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);