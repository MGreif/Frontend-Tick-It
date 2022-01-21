import { SettingOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import classes from './CardTitle.module.css'

interface ICardTitleProps {
  title: string,
  onClick: Function
  _id: string
}

const CardTitle = ({ onClick, title, _id }: ICardTitleProps) => {
  return (
    <div className={classes.container}>
      <span><Link to={`/tickets/${_id}`}>{title}</Link></span>
      <Button shape="circle" type="dashed" icon={<SettingOutlined />} onClick={() => onClick()} className={classes.iconButton}/>
    </div>
  )
}

export default CardTitle