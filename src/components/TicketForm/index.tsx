import React from 'react'
import classes from './index.module.css'
import { Form, Input, Button, InputNumber, DatePicker, AutoComplete, Select } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { IProjectState, IRootState } from '../../redux/project.reducer';
import Label from '../Label';
import { useCreateNewTicket } from '../../hooks/useCreateNewTicket';

const { TextArea } = Input
const { Option } = Select

const TicketForm = () => {
  const [form] = Form.useForm();
  const activeProject = useSelector<IRootState, IProjectState | null>(state => state.activeProject)
  const createNewTicket = useCreateNewTicket()

  const handleFinish = (fieldsValue: any) => {
    const data = {
      ...fieldsValue,
      createdBy: "61ac087a5ea297b9314cf278",
      relatedTickets: [],
      project: activeProject?._id,
      closed: false
    }

    createNewTicket(data)
  }

  // createdBy, related Tickets, project, closed TODO

  if (!activeProject) return null

  return (
    <div>
      <Form
        layout="vertical"
        form={form}
        onFinish={handleFinish}
      >
        <Form.Item
          label="Title"
          rules={[{ required: true, message: 'Please input a title' }]}
          name="title"
        >
          <Input placeholder="Sample Ticket" />
        </Form.Item>
        <Form.Item label="Description" name="description" initialValue="">
          <TextArea placeholder="This is a sample ticket" rows={7} style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item style={{ marginBottom: 0 }} className={classes.doubleItemContainer}>
          <Form.Item label="Weight" name="weight" className={classes.doubleItem}>
            <InputNumber addonBefore={<ExclamationCircleOutlined />} placeholder="4" />
          </Form.Item>
          <Form.Item label="Due Date" name="dueDate" className={classes.doubleItem}>
            <DatePicker />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Assignee" name="assignee">
          <AutoComplete
            options={activeProject?.members.map(member => ({ value: member._id, label: member.name }))}
            style={{ width: 200 }}
            placeholder="Max Musterman"
          />
        </Form.Item>
        <Form.Item label="Labels" name="labels" >
          <Select mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Please Select the corresponding labels"
          >
            {
              activeProject.labels.map(label => <Option value={label._id} title={label.name} key={label._id}><Label labelData={label} /></Option>)
            }
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default TicketForm