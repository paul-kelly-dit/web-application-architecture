const initialState = Object.freeze([]);

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return state.concat(action.payload);
    }
    case 'REMOVE_TODO': {
      return state.filter((todo) => todo.id !== action.payload);
    }
    case 'CHANGE_TODO_STATUS': {
      return state.map((todo) => {
        if (todo.id !== action.payload.id) {
          return todo;
        }
        return {
          ...todo,
          done: action.payload.done,
        };
      });
    }
    default: {
      return state;
    }
  }
};

export default todosReducer;
