import React from 'react';
import { Modal } from 'antd';

import TaskForm from 'shared/Components/TaskForm';
import useAddTaskModal from './useAddTaskModal';

const AddTaskModal = ({ modal: { isOpen }, setModal }) => {
  const { form, onAddTask } = useAddTaskModal({ setModal });
  return (
    <Modal
      open={isOpen}
      title="New task"
      footer={[]}
      onCancel={() => setModal({})}
    >
      <TaskForm
        form={form}
        onSubmit={onAddTask}
      />
    </Modal>
  );
};

export default AddTaskModal;
