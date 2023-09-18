const initialState = {
  tasks: [],
  task: {},
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_TASKS_LIST': {
      return {
        ...state,
        tasks: action.payload,
      };
    }
    case 'GET_TASK': {
      return {
        ...state,
        task: action.payload,
      };
    }
    case 'ADD_TASK': {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    }
    case 'EDIT_TASK': {
      const { id, data } = action.payload;

      const tasksCp = [...state.tasks];
      const selectedTaskIdx = tasksCp.findIndex((t) => t.id === +id);
      tasksCp[selectedTaskIdx] = data;

      return {
        ...state,
        tasks: tasksCp,
      };
    }
    case 'DELETE_TASK': {
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.payload),
      };
    }
    default:
      return state;
  }
};
