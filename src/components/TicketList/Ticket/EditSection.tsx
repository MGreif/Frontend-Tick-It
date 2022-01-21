import {
  ExclamationCircleOutlined,
} from '@ant-design/icons'
import {  DatePicker, InputNumber, Form } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import React from 'react'
import { ITicket } from '../../../pages/tickets/types'
import LabelSelect from '../../LabelSelect'
import classes from './EditSection.module.css'

interface IEditSectionProps {
  ticketData: ITicket,
  setInnerState: any,
  innerState: any,
  initialValues: any
}

const EditSection = ({ ticketData, setInnerState, innerState }: IEditSectionProps) => {
  const [form] = useForm()
  const handleChange = (target: string, value: any) => {
    setInnerState({ ...innerState, [target]: value })
  }

  return (
    <Form form={form} layout='vertical'>
      <Form.Item>
        <Form.Item label="Due Date" name="dateDue" className={classes.doubleItem}>
          <DatePicker
            placeholder={ticketData.dateDue && ticketData.dateDue.toString()}
            onChange={(value) => handleChange('dateDue', value)}
            />
        </Form.Item>
        <Form.Item label="Weight" name="weight" className={classes.doubleItem}>
          <InputNumber
            addonBefore={<ExclamationCircleOutlined />}
            placeholder={`${ticketData.weight}`}
            onChange={(value) => handleChange('weight', value)}
            />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Labels" name="labels" >
        <LabelSelect selectedLabels={ticketData.labels} onChange={(values: any) => handleChange('labels', values)}/>
      </Form.Item>
    </Form>
  )
}

export default EditSection
