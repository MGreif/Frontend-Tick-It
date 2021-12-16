import { Card } from 'antd'
import React from 'react'
import { ITicket } from '../../../pages/tickets/types'
import classes from './index.module.css'
import Label from '../../Label'

interface ITicketProps {
  ticketData: ITicket
}

const Ticket = ({ ticketData }: ITicketProps) => {
  return (
    <Card
      title={ticketData.title}
      className={classes['ticket-container']}
      bordered={true}
    >
      <span className={classes.weight}>weight: {ticketData.weight}</span>
      <div className={classes['label-container']}>
        {
          ticketData.labels.map(label => <Label labelData={label}/>)
        }
      </div>
    </Card>
  )
}

export default Ticket