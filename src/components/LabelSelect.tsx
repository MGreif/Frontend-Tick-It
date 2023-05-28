import React from 'react'
import { Select } from "antd"
import { useSelector } from 'react-redux'
import { IProjectState, IProjectRootState } from '../redux/project.reducer'
import { ILabel } from '../pages/labels/types'

const { Option } = Select

interface ILabelSelectProps {
  onChange: any,
  selectedLabels: ILabel[]
}

const LabelSelect = ({ onChange, selectedLabels }: ILabelSelectProps) => {
  const activeProject = useSelector<IProjectRootState, IProjectState | null>((state: IProjectRootState) => state.activeProject)

  return (
    <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      onChange={onChange}
      defaultValue={selectedLabels.map(label => label._id)}
      placeholder="Please Select the corresponding labels">
      {activeProject?.labels.map((label) => (
        <Option value={label._id} key={label._id}>
          {label.name}
        </Option>
      ))}
  </Select>
  )
}

export default LabelSelect