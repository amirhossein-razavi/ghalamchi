const initialState = {
  title: '',
  description: '',
  duration: 5,
  show: false,
  type: '',
};

export default (state = initialState, action = {}) => {
  switch (action?.type) {
    case 'ON_NOTIFICATION': {
      const { title, description, duration, show, type } = action.payload || {};
      return {
        title,
        description,
        duration,
        show,
        type,
      };
    }
    default:
      return state;
  }
};
