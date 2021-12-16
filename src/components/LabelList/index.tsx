import React from 'react'
import { List } from 'antd'
import classes from './index.module.css'
import { useSelector } from 'react-redux'
import { IRootState } from '../../redux/project.reducer'
import { ILabel } from '../../pages/labels/types'
import LabelListItem from './LabelListItem'

interface IlabelListProps {

}

const LabelList = (props: IlabelListProps) => {

  const labels : ILabel[] | undefined = useSelector<IRootState, ILabel[] | undefined>(state => state.activeProject?.labels)

  return (
    <List
    className={classes.list}
    bordered
    itemLayout="horizontal"
    dataSource={labels || []}
    header={<b>Labels</b>}
    renderItem={(label: ILabel) => (
      <List.Item className={classes.listItem}>
        <LabelListItem labelData={label} />
      </List.Item>
    )}
  />
  )
}

export default LabelList