import { SettingOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import { useUpdateTicket } from '../../hooks/tickets/useUpdateTicket'
import { ITicket } from '../../pages/tickets/types'
import GenericDrawer, { IGenericDrawerProps } from '../GenericDrawer'
import classes from './CardTitle.module.css'
import EditSection from './EditSection'

interface ICardTitleProps {
  ticket: ITicket
}

const CardTitle = ({ ticket }: ICardTitleProps) => {
  const updateTicket = useUpdateTicket()

  const actions : IGenericDrawerProps["actions"] = [
    { function: () => updateTicket(ticket._id, {closed: !ticket.closed}), label: ticket.closed ? "Re-open Ticket" : "Close Ticket", buttonProps: {style: { marginLeft: '1em'}, type: 'default'}},
    { function: (innerState: any) => updateTicket(ticket._id, innerState), label: "Save", buttonProps: {style: { marginLeft: '1em'}, type: 'primary'}}
  ]

  return (
    <div className={classes.container}>
      <span><Link to={{ pathname: `/tickets/${ticket._id}`, state: { callee: 'board' }}}>{ticket.title}</Link></span>
      <GenericDrawer
        buttonProps={{
          shape: 'circle',
          type:'dashed',
          icon:<SettingOutlined />,
          className: classes.iconButton}
        }
        content={(props) => <EditSection ticketData={ticket} {...props} />} title={ticket.title} actions={actions}/>
    </div>
  )
}

export default CardTitle