import React from 'react'
import classes from './LabelListItem.module.css'
import { ILabel } from '../../pages/labels/types'
import Label from '../Label'
import GenericModal from '../GenericModal'
import { DeleteOutlined } from '@ant-design/icons'
import { useDeleteLabel } from '../../hooks/labels/useDeleteLabel'

interface IlabelListItemProps {
  labelData: ILabel
}

const LabelListItem = ({ labelData }: IlabelListItemProps) => {
  const deleteLabel = useDeleteLabel()

  return (
    <div className={classes.container}>
      <div>
        <span>
          <Label labelData={labelData}/>
        </span>
        <div>{labelData.description}</div>
      </div>
      <div>
      <GenericModal 
          buttonLabel={<DeleteOutlined />}
          title="Delete Label"
          content={() => <div>Are you sure, that you want to delete this label?</div>}
          actions={[{label: "Delete", function: () => deleteLabel(labelData._id), buttonProps: {style: { color: "red", borderColor: "red"}}}]}
          buttonProps={{type: "dashed", className: classes.deleteButton, size:"middle"}}
        />
      </div>
  </div>
  )
}

export default LabelListItem