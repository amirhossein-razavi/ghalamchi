import { useDispatch } from 'react-redux';
import { Form } from 'antd';

import { addTask } from 'redux/actions/tasksActions';

const useAddTaskModal = ({ setModal }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onAddTask = ({ title, description, completed }) => {
    const body = { title, description, completed: !!completed, id: Date.now() };

    dispatch(addTask(body))
      .then(() => {
        dispatch({
          type: 'ON_NOTIFICATION',
          payload: {
            title: '',
            description: 'Task added successfully',
            duration: 3,
            show: true,
            type: 'success',
          },
        });
        setModal({});
        form.resetFields();
      });
  };

  return {
    form,
    onAddTask,
  };
};

export default useAddTaskModal;
