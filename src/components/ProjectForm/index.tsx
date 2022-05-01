import React, { useEffect } from 'react'
import { Form, Input, Select } from 'antd'
import { useForm } from 'antd/lib/form/Form'

interface IProjectForm {
  setInnerState: any
  innerState: any
  initialValues: any
}

const ProjectForm = (props: IProjectForm) => {
  const [form] = useForm()

  useEffect(() => {
    if (Object.keys(props.innerState).length === 0) {
      form.resetFields()
    }
  }, [props.innerState, form])

  return (
    <Form
      onValuesChange={(e) => props.setInnerState({ ...props.innerState, ...e })}
      layout="vertical"
      form={form}
      initialValues={props.initialValues}
    >
      <Form.Item label="Name" name="name">
        <Input placeholder="Project XY" />
      </Form.Item>
      <Form.Item label="Description" name="description">
        <Input placeholder="This is a fancy project" />
      </Form.Item>
      <Form.Item label="Members" name="members">
        <Select
          style={{ width: 180 }}
          onChange={(value) =>
            props.setInnerState({
              ...props.innerState,
              filterCriteriaLabel: value,
            })
          }
        >
          {/*TODO FRIENDS*/}
        </Select>
      </Form.Item>
    </Form>
  )
}

export default ProjectForm
