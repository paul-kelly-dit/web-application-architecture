const getPseudoRandomId = () =>
  Math.random()
    .toString(36)
    .slice(-6);

export const addTodo = (text) => ({
    type: 'ADD_TODO',
    payload: {
        id: getPseudoRandomId(),
        text,
    },
});

export const removeTodo = (id) => ({
    type: 'REMOVE_TODO',
    payload: id,
});

export const changeStatus = (id, done) => ({
    type: 'CHANGE_TODO_STATUS',
        payload: {
        id,
        done,
    },
});
