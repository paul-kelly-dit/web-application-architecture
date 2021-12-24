import React from 'react';
import { connect } from 'react-redux';

const TodoList = (props) => (
  <div>
    <p>
      {props.totalCount} Todos. {props.todos.length} completed
    </p>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  const filteredTodos =
    ownProps.type === 'completed'
      ? state.todos.filter((todo) => todo.completed === true)
      : state.todos.filter((todo) => todo.completed !== true);

  return {
    totalCount: state.todos.length,
    todos: filteredTodos,
  };
};

const ConnectedTodoList = connect(mapStateToProps)(TodoList);

export default ConnectedTodoList;
