import React from 'react';
import { createStore } from 'redux';

const initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PLUS': {
      return state + (action.payload || 0);
    }
    case 'MINUS': {
      return state - (action.payload || 0);
    }
    default: {
      return state;
    }
  }
};

const store = createStore(counterReducer);

const initialstate = store.getState();

store.dispatch({ type: 'PLUS', payload: 2 });
const dispatch_1 = store.getState();

store.dispatch({ type: 'PLUS', payload: 1 });
const dispatch_2 = store.getState();

store.dispatch({ type: 'MINUS', payload: 2 });
const dispatch_3 = store.getState();

const App = () => {
  return (
    <div>
      <p> Initial state: { initialstate } </p>
      <p> State after +2 payload: { dispatch_1 } </p>
      <p> State after +1 payload: { dispatch_2 } </p>
      <p> State after -2 payload: { dispatch_3 } </p>
    </div>
  );
};

export default App;