import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import todosReducer from './store/todos/reducer';
import TodoList from './TodoList';

const rootReducer = combineReducers({
    todos: todosReducer,
});

const store = createStore(rootReducer);

const App = () => (
    <Provider store={store}>
        <TodoList />
    </Provider>
);

export default App;
