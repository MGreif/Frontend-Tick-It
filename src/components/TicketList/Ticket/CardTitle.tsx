import { SettingOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import classes from './CardTitle.module.css'

interface ICardTitleProps {
  title: string,
  onClick: Function
}

const CardTitle = ({ onClick, title }: ICardTitleProps) => {
  return (
    <div className={classes.container}>
      <span>{title}</span>
      <Button shape="circle" type="dashed" icon={<SettingOutlined />} onClick={() => onClick()} className={classes.iconButton}/>
    </div>
  )
}

export default CardTitle