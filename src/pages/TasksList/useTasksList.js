import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTasksList, deleteTask } from 'redux/actions/tasksActions';

const useTasksList = () => {
  const [modal, setModal] = useState({});
  const { tasks = [] } = useSelector((state) => ({
    tasks: state.tasks.tasks,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    if (!tasks.length) dispatch(getTasksList());
  }, []);

  const onDeleteTask = (id) => {
    dispatch(deleteTask(id))
      .then(() => {
        dispatch({
          type: 'ON_NOTIFICATION',
          payload: {
            title: '',
            description: 'Task deleted successfully',
            duration: 3,
            show: true,
            type: 'info',
          },
        });
      });
  };

  return {
    tasks,
    modal,
    onDeleteTask,
    setModal,
  };
};

export default useTasksList;
