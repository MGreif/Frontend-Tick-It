import { Card } from 'antd'
import React from 'react'
import { getRelativeTime } from '../../libs/getRelativeTimeUntilNow'
import { ITicket } from '../../pages/tickets/types'
import Label from '../Label'
import classes from './TicketListItem.module.css'

interface ITicketListItemProps {
  ticketData: ITicket
}

const TicketListItem = ({ ticketData }: ITicketListItemProps) => {
  return (
    <Card className={classes.card}>
      <div className={classes.container}>
        <span>
          {ticketData.title}
          <span className={classes.labelContainer}>{ticketData.labels.map(label => <Label labelData={label} key={label._id} />)}</span>
        </span>
        <span>{getRelativeTime(new Date(ticketData.createdAt))}</span>
      </div>
    </Card>
  )
}

export default TicketListItem