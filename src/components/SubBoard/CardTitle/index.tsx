import React from 'react'
import classes from './index.module.css'


interface ICardTitleProps {
  wipLimit: number,
  title: string,
  currentTicketAmount: number
}

const CardTitle = ({ title, wipLimit, currentTicketAmount }: ICardTitleProps) => {
  return (
    <div className={classes.content}>
      <span>{title}</span>
      <span className={currentTicketAmount > wipLimit ? classes.overflow : ''}>{currentTicketAmount} / {wipLimit}</span>
    </div>
  )
}

export default CardTitle