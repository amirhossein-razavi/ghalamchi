import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { Form } from 'antd';

import { getTask, editTask } from 'redux/actions/tasksActions';

const useTask = () => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTask(id))
      .then((res) => {
        form.setFieldsValue({
          title: res.title,
          description: res.description,
          completed: res.completed,
        });
      });
  }, []);

  const onEditTask = ({ title, description, completed }) => {
    const body = { title, description, completed: !!completed };

    dispatch(editTask(body, id))
      .then(() => {
        dispatch({
          type: 'ON_NOTIFICATION',
          payload: {
            title: '',
            description: 'Task edited successfully',
            duration: 3,
            show: true,
            type: 'success',
          },
        });
        history.push('/tasks');
      });
  };

  return {
    form,
    onEditTask,
  };
};

export default useTask;
