const initialState = {
  loading: false,
};

export default (state = initialState, action = {}) => {
  switch (action?.type) {
    case 'ON_LOADING': {
      return {
        loading: action.payload,
      };
    }
    default:
      return state;
  }
};
