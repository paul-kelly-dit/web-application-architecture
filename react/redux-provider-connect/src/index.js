import React from 'react';
import ReactDOM from 'react-dom';
import user from './store/user/reducer';
import todos from './store/todos/reducer';
import ConnectedTodoList from './App.js';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
require('./style.css');

const rootReducer = combineReducers({ todos, user });

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedTodoList />
  </Provider>,
  document.getElementById('root')
);
