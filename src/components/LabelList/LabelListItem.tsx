import React from 'react'
import classes from './LabelListItem.module.css'
import { ILabel } from '../../pages/labels/types'
import Label from '../Label'

interface IlabelListItemProps {
  labelData: ILabel
}

const LabelListItem = ({ labelData }: IlabelListItemProps) => {

  return (
    <div className={classes.container}>
    <span>
      <Label labelData={labelData}/>
    </span>
    <div>{labelData.description}</div>
  </div>
  )
}

export default LabelListItem