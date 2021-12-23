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

const App = () => {
  return (
    <div>
      <p> Initial state: { store.getState() } </p>
    </div>
  );
};

export default App;