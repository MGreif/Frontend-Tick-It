import React from 'react'
import { ILabel } from '../../pages/labels/types'
import { pickTextColorBasedOnBgColor } from './helper/pickTextColorBasedOnBgColor'
import classes from './index.module.css'

interface ILabelProps {
  labelData: ILabel
}

const Label = ({ labelData }: ILabelProps) => {
  const textColor = pickTextColorBasedOnBgColor(labelData.color, "white", "black")
  return <span className={classes.label} style={{backgroundColor: labelData.color, color: textColor}}>{labelData.name}</span>
}

export default Label