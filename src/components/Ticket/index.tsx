import { Card } from 'antd'
import React from 'react'
import classes from './index.module.css'
import Label from '../Label'
import CardTitle from './CardTitle'
import _ from 'lodash'
import { IGenericDrawerProps, DrawerWrapper } from '../GenericDrawer'
import { useUpdateTicket } from '../../hooks/tickets/useUpdateTicket'
import EditSection from './EditSection'

const formatTime = (_date: Date) => {
  const date = new Date(_date)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  return `${year}-${month}-${day}`
}

const Ticket = ({ ticketData: ticket, ...props }: any) => {
  const updateTicket = useUpdateTicket()

  const actions: IGenericDrawerProps['actions'] = [
    {
      function: () => updateTicket(ticket._id, { closed: !ticket.closed }),
      label: ticket.closed ? 'Re-open Ticket' : 'Close Ticket',
      buttonProps: { style: { marginLeft: '1em' }, type: 'default' },
    },
    {
      function: (innerState: any) => updateTicket(ticket._id, innerState),
      label: 'Save',
      buttonProps: { style: { marginLeft: '1em' }, type: 'primary' },
    },
  ]

  return _.flowRight(
    props.connectDragSource,
    props.connectDropTarget
  )(
    <div className={classes.ticketContainer}>
      <DrawerWrapper
        buttonProps={{
          shape: 'circle',
          type: 'dashed',
          className: classes.iconButton,
        }}
        content={(props: any) => <EditSection ticketData={ticket} {...props} />}
        title={ticket.title}
        actions={actions}
      >
        <Card title={ticket && <CardTitle ticket={ticket} />} bordered={true}>
          <div style={{ position: 'relative', paddingBottom: '1.3em' }}>
            <div className={classes.labelContainer}>
              {ticket?.labels.map((label: any) => (
                <Label labelData={label} key={label._id} />
              ))}
            </div>
            {ticket?.weight && (
              <span className={classes.weight}>weight: {ticket.weight}</span>
            )}
            {ticket?.dateDue && (
              <span className={classes.dueDate}>
                Due: {formatTime(ticket.dateDue)}
              </span>
            )}
          </div>
        </Card>
      </DrawerWrapper>
    </div>
  )
}

export default Ticket
