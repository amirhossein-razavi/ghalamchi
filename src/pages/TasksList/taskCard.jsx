import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Tag, Dropdown } from 'antd';
import { CheckCircleOutlined, SyncOutlined, EllipsisOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const TaskCard = ({ task, onDeleteTask }) => (
  <Col xs={24} md={8} className="mt-5">
    <Card
      size="small"
      title={task.title}
      extra={(
        <Dropdown
          menu={{
            items: [
              {
                key: '1',
                label: (
                  <Link to={`/tasks/${task.id}`}>
                    <EditOutlined />
                    <span className="ms-2">Edit</span>
                  </Link>
                ),
              },
              {
                key: '2',
                label: (
                  <p onClick={() => onDeleteTask(task.id)} role="presentation">
                    <DeleteOutlined />
                    <span className="ms-2">Delete</span>
                  </p>
                ),
              },
            ],
          }}
          trigger={['click']}
        >
          <EllipsisOutlined />
        </Dropdown>
      )}
    >
      <p>{task.description}</p>
      {task.completed}
      <Tag
        icon={task.completed ? <CheckCircleOutlined /> : <SyncOutlined spin />}
        color={task.completed ? 'success' : 'processing'}
        className="mt-3"
      >
        {task.completed ? 'Completed' : 'Incompleted'}
      </Tag>
    </Card>
  </Col>
);

export default TaskCard;
