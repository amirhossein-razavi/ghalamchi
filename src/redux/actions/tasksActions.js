import sendRequest from 'lib/connectServer';

export const getTasksList = () => async (dispatch) => {
  dispatch({ type: 'ON_LOADING', payload: true });

  return sendRequest('/api/tasks', 'GET', 'application/json', null, dispatch)
    .then(async (res) => {
      dispatch({ type: 'ON_LOADING', payload: false });
      dispatch({ type: 'GET_TASKS_LIST', payload: res });
      return res;
    })
    .catch(() => {
      dispatch({ type: 'ON_LOADING', payload: false });
      return false;
    });
};

export const getTask = (id) => async (dispatch) => {
  dispatch({ type: 'ON_LOADING', payload: true });

  return sendRequest(`/api/tasks/${id}`, 'GET', 'application/json', null, dispatch)
    .then(async (res) => {
      dispatch({ type: 'ON_LOADING', payload: false });
      dispatch({ type: 'GET_TASK', payload: res });
      return res;
    })
    .catch(() => {
      dispatch({ type: 'ON_LOADING', payload: false });
      return false;
    });
};

export const addTask = (body) => async (dispatch) => {
  dispatch({ type: 'ON_LOADING', payload: true });

  return sendRequest('/api/tasks', 'POST', 'application/json', JSON.stringify(body), dispatch)
    .then(async (res) => {
      dispatch({ type: 'ADD_TASK', payload: res });
      dispatch({ type: 'ON_LOADING', payload: false });
      return res;
    })
    .catch(() => {
      dispatch({ type: 'ON_LOADING', payload: false });
      return false;
    });
};

export const editTask = (body, id) => async (dispatch) => {
  dispatch({ type: 'ON_LOADING', payload: true });

  return sendRequest(`/api/tasks/${id}`, 'PUT', 'application/json', JSON.stringify(body), dispatch)
    .then(async (res) => {
      dispatch({ type: 'EDIT_TASK', payload: { id, data: res } });
      dispatch({ type: 'ON_LOADING', payload: false });
      return res;
    })
    .catch(() => {
      dispatch({ type: 'ON_LOADING', payload: false });
      return false;
    });
};

export const deleteTask = (id) => async (dispatch) => {
  dispatch({ type: 'ON_LOADING', payload: true });

  return sendRequest(`/api/tasks/${id}`, 'DELETE', 'application/json', null, dispatch)
    .then(async (res) => {
      dispatch({ type: 'ON_LOADING', payload: false });
      dispatch({ type: 'DELETE_TASK', payload: id });
      return res;
    })
    .catch(() => {
      dispatch({ type: 'ON_LOADING', payload: false });
      return false;
    });
};
