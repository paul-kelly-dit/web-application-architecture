const initialState = Object.freeze({});

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER': {
      return {
        name: action.payload.name,
        accessToken: action.payload.accessToken,
      };
    }
    default: {
      return state;
    }
  }
};

export default user;
