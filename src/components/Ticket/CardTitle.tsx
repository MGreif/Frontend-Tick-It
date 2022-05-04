import React from 'react'
import { Link } from 'react-router-dom'
import { buildRouterLink } from '../../libs/linkBuilder'
import { ITicket } from '../../pages/tickets/types'
import classes from './CardTitle.module.css'

interface ICardTitleProps {
  ticket: ITicket
}

const CardTitle = ({ ticket }: ICardTitleProps) => {
  return (
    <div className={classes.container}>
      <span>
        <Link
          to={{
            pathname: buildRouterLink(`/tickets/${ticket._id}`),
            state: { callee: 'board' },
          }}
        >
          {ticket.title}
        </Link>
      </span>
    </div>
  )
}

export default CardTitle
