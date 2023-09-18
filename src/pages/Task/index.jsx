import React from 'react';

import TaskForm from 'shared/Components/TaskForm';
import useTask from './useTask';

const Task = () => {
  const { form, onEditTask } = useTask();
  return (
    <div className="p-4">
      <TaskForm
        form={form}
        onSubmit={onEditTask}
        mode="edit"
      />
    </div>
  );
};

export default Task;
