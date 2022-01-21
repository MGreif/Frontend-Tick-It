import {
  CheckOutlined,
  CloseOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons'
import { Button, DatePicker, Divider, InputNumber, Form } from 'antd'
import React, { useState } from 'react'
import { ITicket } from '../../../pages/tickets/types'
import classes from './EditSection.module.css'
import { useUpdateTicket } from '../../../hooks/tickets/useUpdateTicket'

interface IEditSectionProps {
  hideEditSection: Function
  ticketData: ITicket
}

const EditSection = ({ hideEditSection, ticketData }: IEditSectionProps) => {
  const updateTicket = useUpdateTicket()
  const [updateState, setUpdateState] = useState({})

  const handleClose = () => {
    hideEditSection()
  }

  const handleSave = () => {
    updateTicket(ticketData._id, updateState)
    hideEditSection()
  }

  const handleChange = (target: string, value: any) => {
    setUpdateState({ ...updateState, [target]: value })
  }

  return (
    <React.Fragment>
      <Divider />
      <div className={classes.container}>
        <Form.Item label="Due Date" name="dateDue">
          <DatePicker
            style={{ width: '100%' }}
            placeholder={ticketData.dateDue && ticketData.dateDue.toString()}
            onChange={(value) => handleChange('dateDue', value)}
          />
        </Form.Item>
        <Form.Item label="Weight" name="weight" className={classes.weightInput}>
          <InputNumber
            addonBefore={<ExclamationCircleOutlined />}
            placeholder={`${ticketData.weight}`}
            onChange={(value) => handleChange('weight', value)}
          />
        </Form.Item>
        <div className={classes.buttonContainer}>
          <Button
            shape="circle"
            size="small"
            type="dashed"
            icon={<CheckOutlined />}
            onClick={() => handleSave()}
            className={classes.iconButton}
          />
          <Button
            shape="circle"
            size="small"
            type="dashed"
            icon={<CloseOutlined />}
            onClick={() => handleClose()}
            className={classes.iconButton}
          />
        </div>
      </div>
    </React.Fragment>
  )
}

export default EditSection
