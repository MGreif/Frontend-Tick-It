import React from 'react'
import { ILabel } from '../pages/labels/types'
import classes from './Label.module.css'

interface ILabelProps {
  labelData: ILabel
}

const Label = ({ labelData }: ILabelProps) => {
  return <span className={classes.label} style={{backgroundColor: labelData.color}}>{labelData.name}</span>
}

export default Label