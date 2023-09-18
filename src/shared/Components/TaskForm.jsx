import React from 'react';
import { Button, Form, Input, Switch } from 'antd';

const TaskForm = ({ form, onSubmit, mode }) => (
  <Form
    form={form}
    name="basic"
    initialValues={{ remember: true }}
    autoComplete="off"
    layout="vertical"
    onFinish={onSubmit}
    className="w-100 mt-3"
  >
    <Form.Item shouldUpdate className="w-100">
      {({ getFieldValue }) => (
        <div className="w-100">

          <Form.Item
            label="Title"
            name="title"
            rules={[
              { required: true },
              {
                validator: async (_, value) => {
                  if (value && value.length < 3) return Promise.reject(new Error('Title should be at least 3 characters'));
                  return null;
                },
              },
            ]}
          >
            <Input placeholder="Title" />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              { required: true },
              {
                validator: async (_, value) => {
                  if (value && value.length < 10) return Promise.reject(new Error('Description should be at least 10 characters'));
                  return null;
                },
              },
            ]}
          >
            <Input.TextArea placeholder="Description" rows={6} />
          </Form.Item>

          <Form.Item
            label="Completion"
            name="completed"
          >
            <Switch checkedChildren="Complete" unCheckedChildren="Incomplete" checked={getFieldValue().completed} />
          </Form.Item>

          <div className="d-flex justify-content-end">
            <Button style={{ width: 150 }} type="primary" htmlType="submit">{mode === 'edit' ? 'Edit' : 'Add'}</Button>
          </div>

        </div>
      )}
    </Form.Item>
  </Form>
);

export default TaskForm;
