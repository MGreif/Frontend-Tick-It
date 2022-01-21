import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'
import { useSelector } from 'react-redux'
import { IProjectState, IRootState } from '../../redux/project.reducer'
import { useCreateNewLabel } from '../../hooks/labels/useCreateNewLabel'
import { HuePicker } from 'react-color'

const { TextArea } = Input

interface ILabelFormProps {
  history: any
}

const LabelForm = ({ history }: ILabelFormProps) => {
  const [form] = Form.useForm()
  const activeProject = useSelector<IRootState, IProjectState | null>(
    (state) => state.activeProject
  )
  const createNewLabel = useCreateNewLabel()
  const [color, setColor] = useState('#ffffff')

  const handleColorChange = (color: any) => {
    setColor(color.hex)
  }

  const handleFinish = (fieldsValue: any) => {
    const data = {
      ...fieldsValue,
      project: activeProject?._id,
    }

    createNewLabel(data).then(() => history.push('/labels'))
  }

  if (!activeProject) return null

  return (
    <div>
      <Form layout="vertical" form={form} onFinish={handleFinish}>
        <Form.Item
          label="Name"
          rules={[{ required: true, message: 'Please input a title' }]}
          name="name">
          <Input placeholder="Sample Label" />
        </Form.Item>
        <Form.Item label="Description" name="description" initialValue="">
          <TextArea
            placeholder="This is a sample Label"
            rows={7}
            style={{ width: '100%' }}
          />
        </Form.Item>
        <Form.Item name="color" label="Color">
          <HuePicker
            color={color}
            onChange={handleColorChange}
            onChangeComplete={({ hex }) => form.setFieldsValue({ color: hex })}
            width="100%"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default LabelForm
