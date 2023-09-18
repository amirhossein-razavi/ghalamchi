import React from 'react';
import { Row, Button } from 'antd';

import AddTaskModal from 'shared/AddTaskModal';
import useTasksList from './useTasksList';
import TaskCard from './taskCard';

const TasksList = () => {
  const { tasks = [], modal, setModal, onDeleteTask } = useTasksList();
  return (
    <div className="p-4">
      <Button type="primary" className="mb-n4" onClick={() => setModal({ isOpen: true })}>Add task</Button>

      <Row gutter={16}>
        {tasks.map((task) => <TaskCard key={task.id} task={task} onDeleteTask={onDeleteTask} />)}
      </Row>

      <AddTaskModal modal={modal} setModal={setModal} />
    </div>
  );
};

export default TasksList;
