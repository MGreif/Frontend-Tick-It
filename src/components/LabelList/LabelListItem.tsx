import React from 'react'
import classes from './LabelListItem.module.css'
import { ILabel } from '../../pages/labels/types'
import Label from '../Label'
import GenericModal from '../GenericModal'
import { DeleteOutlined } from '@ant-design/icons'
import { useDeleteLabel } from '../../hooks/labels/useDeleteLabel'
import { Card } from 'antd'

interface IlabelListItemProps {
  labelData: ILabel
}

const LabelListItem = ({ labelData }: IlabelListItemProps) => {
  const deleteLabel = useDeleteLabel()

  return (
    <Card className={classes.card}>
      <div className={classes.container}>
        <div>
          <span>
            <Label labelData={labelData} />
          </span>
          <div className={classes.description}>{labelData.description}</div>
        </div>
        <div>
          <GenericModal
            buttonLabel={<DeleteOutlined />}
            title="Delete Label"
            content={() => <div>Are you sure, that you want to delete this label?</div>}
            actions={[{ label: "Delete", function: () => deleteLabel(labelData._id), buttonProps: { style: { color: "red", borderColor: "red" } } }]}
            buttonProps={{ type: "dashed", className: classes.deleteButton, size: "large", shape: "circle" }}
          />
        </div>
      </div>
    </Card>
  )
}

export default LabelListItem