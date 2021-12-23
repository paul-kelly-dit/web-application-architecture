import React from 'react';
import { connect } from 'react-redux';

const TodoList = (props) => (
  <div>
    <p>
      {props.totalCount} Todos. {props.completedTodos.length} completed and{' '}
      {props.openTodos.length} open.
    </p>
  </div>
);

const mapStateToProps = (state) => {
  return {
    openTodos: state.todos.filter((todo) => todo.completed !== true),
    completedTodos: state.todos.filter((todo) => todo.completed === true),
    totalCount: state.todos.length,
  };
};

const ConnectedTodoList = connect(mapStateToProps)(TodoList);

export default ConnectedTodoList;
