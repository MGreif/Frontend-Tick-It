import React from 'react'
import { Form, Input, Select } from 'antd';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../redux/project.reducer';
import { ILabel } from '../../../pages/labels/types';

interface ICreateSubBoardForm {
  setInnerState: any,
  innerState: any
}

const { Option } = Select

const CreateSubBoardForm = (props: ICreateSubBoardForm) => {
  const labels = useSelector<IRootState, ILabel[] | undefined>(state => state.activeProject?.labels)

  return <Form onValuesChange={props.setInnerState} layout="vertical">
      <Form.Item label="Name" name="name">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Filter criteria" name="filterCriteriaLabel">
        <Select style={{ width: 120 }} onChange={(value) => props.setInnerState({filterCriteriaLabel: value})}>
        {
          labels && labels.map(label => <Option value={label._id}>{label.name}</Option>)
        }
        </Select>
      </Form.Item>
      <Form.Item label="WIP-Limit" name="wipLimit">
        <Input placeholder="4" type="number" />
      </Form.Item>
    </Form>
}

export default CreateSubBoardForm