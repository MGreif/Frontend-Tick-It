import React from 'react'
import { List } from 'antd'
import TicketListItem from './TicketListItem'
import { ITicket } from '../../pages/tickets/types'
import { useSelector } from 'react-redux'
import { IRootState } from '../../redux/project.reducer'
import classes from './index.module.css'

const TicketList = () => {

  const tickets = useSelector<IRootState, ITicket[] | undefined>(state => state.activeProject?.tickets)

  return (
    <List
    className={classes.list}
    bordered
    itemLayout="horizontal"
    dataSource={tickets || []}
    header={<b>Tickets</b>}
    renderItem={(ticket: ITicket) => (
      <List.Item className={classes.listItem}>
        <TicketListItem ticketData={ticket} />
      </List.Item>
    )}
  />
  )
}

export default TicketList