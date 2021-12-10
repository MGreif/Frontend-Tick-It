import { Divider } from 'antd'
import { Form, Input } from 'antd';
import React from 'react'
import classes from './Create.module.css'

interface ICreateBoardProps {
  match: any
}

const CreateBoard = (props: ICreateBoardProps) => {
  return (
    <React.Fragment>
      <h1 className={classes.title}>Create New Board</h1>
      <Divider />
      <Form>
        <Form.Item label="Form Layout" name="layout">
          <Input placeholder="input placeholder" />
        </Form.Item>
      </Form>
    </React.Fragment>
  )
}

export default CreateBoard