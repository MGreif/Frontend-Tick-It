import { Card } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { getRelativeTime } from '../../libs/getRelativeTimeUntilNow'
import { buildRouterLink } from '../../libs/linkBuilder'
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
          <Link
            to={{
              pathname: buildRouterLink(`/tickets/${ticketData._id}`),
              state: { callee: 'ticketlist' },
            }}
          >
            {ticketData.title}
            {ticketData.closed && <em> (closed)</em>}
          </Link>
          <span className={classes.labelContainer}>
            {ticketData.labels.map((label) => (
              <Label labelData={label} key={label._id} />
            ))}
          </span>
        </span>
        <span>{getRelativeTime(new Date(ticketData.createdAt))}</span>
      </div>
    </Card>
  )
}

export default TicketListItem
