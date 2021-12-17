import { Card } from 'antd'
import React, { useState } from 'react'
import { ITicket } from '../../../pages/tickets/types'
import classes from './index.module.css'
import Label from '../../Label'
import CardTitle from './CardTitle'
import EditSection from './EditSection'

interface ITicketProps {
  ticketData: ITicket
}

const formatTime = (_date: Date) => {

  const date = new Date(_date)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  return `${year}-${month}-${day}`
}

const Ticket = ({ ticketData }: ITicketProps) => {
  const [clicked, setClicked] = useState<boolean>(false)

  const handleClick = () => {
    setClicked(true)
  }

  return (
    <Card
      title={<CardTitle onClick={handleClick} title={ticketData.title}/>}
      className={classes.ticketContainer}
      bordered={true}
    >
      <div style={{position: "relative", paddingBottom: "1.3em"}}>
        <div className={classes.labelContainer}>
          {
            ticketData.labels.map(label => <Label labelData={label}/>)
          }
        </div>
        <span className={classes.weight}>weight: {ticketData.weight}</span>
        {ticketData.dateDue && <span className={classes.dueDate}>Due: {formatTime(ticketData.dateDue)}</span> }
      </div>
      {
        clicked && <EditSection hideEditSection={() => setClicked(false)} ticketData={ticketData}/>
      }
    </Card>
  )
}

export default Ticket