import {
  ExclamationCircleOutlined,
} from '@ant-design/icons'
import {  DatePicker, InputNumber, Form, Cascader } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import React from 'react'
import { useSelector } from 'react-redux'
import { ITicket } from '../../../pages/tickets/types'
import { IProjectState, IRootState } from '../../../redux/project.reducer'
import LabelSelect from '../../LabelSelect'
import classes from './EditSection.module.css'

interface IEditSectionProps {
  ticketData: ITicket,
  setInnerState: any,
  innerState: any,
  initialValues: any
}

const EditSection = ({ ticketData, setInnerState, innerState }: IEditSectionProps) => {
  const boardOptions = useSelector<IRootState, IProjectState | null>(state => state.activeProject)?.boards.reduce((acc,curr) => { 
    const option = {
      value: curr._id,
      label: curr.name,
      children: curr.subBoards.map(subBoard => ({value: subBoard._id, label: subBoard.name}))
    }
    return [...acc, option]
  } ,[] as any[])
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
      <Form.Item label="Category" name="allocatedSubBoard">
          <Cascader options={boardOptions} onChange={(value: any) => handleChange('allocatedSubBoard', value[value.length - 1])} placeholder="Please select" />
        </Form.Item>
    </Form>
  )
}

export default EditSection
