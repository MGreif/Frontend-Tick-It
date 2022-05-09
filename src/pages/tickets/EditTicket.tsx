import React, { useEffect } from 'react'
import { Breadcrumb, Col, PageHeader, Row, ButtonProps } from 'antd'
import classes from './List.module.css'
import TicketForm from '../../components/TicketForm'
import { Link, useHistory, useParams } from 'react-router-dom'
import { useUpdateTicket } from '../../hooks/tickets/useUpdateTicket'
import { useGetDetailedTicket } from '../../hooks/tickets/useGetDetailedTicket'
import { useDeleteTicket } from '../../hooks/tickets/useDeleteTicket'
import { buildRouterLink } from '../../libs/linkBuilder'

const EditTicket = () => {
  const updateTicket = useUpdateTicket()
  const deleteTicket = useDeleteTicket()
  const { ticket, fetchTicket }: any = useGetDetailedTicket()
  const { ticketId }: any = useParams()
  const history = useHistory()
  useEffect(() => {
    fetchTicket(ticketId)
  }, [ticketId, fetchTicket])

  const formButtons = [
    {
      onClick: (data: any) => {
        updateTicket(ticketId, data).then(() =>
          history.push(buildRouterLink('/tickets/' + ticketId))
        )
      },
      label: 'Save',
    },
    {
      onClick: () => {
        updateTicket(ticketId, { closed: !ticket.closed }).then(() =>
          history.push(buildRouterLink('/tickets/' + ticketId))
        )
      },
      label: ticket.closed ? 'Re-open Ticket' : 'Close Ticket',
      buttonProps: {
        style: { marginLeft: '1em' },
        type: 'default' as ButtonProps['type'],
      },
    },
    {
      onClick: () => {
        deleteTicket(ticketId).then(() =>
          history.push(buildRouterLink('/tickets'))
        )
      },
      label: 'Delete Ticket ',
      buttonProps: {
        style: { marginLeft: '1em' },
        type: 'default' as ButtonProps['type'],
      },
    },
  ]
  return (
    <div className={classes.listContainer}>
      <PageHeader
        title="Edit Ticket"
        breadcrumb={
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Link to={buildRouterLink('/tickets/')}>Tickets</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to={buildRouterLink('/tickets/' + ticketId)}>
                {ticket.title}
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Edit Ticket</Breadcrumb.Item>
          </Breadcrumb>
        }
      />
      <Row gutter={[16, 16]} className={classes.listRow}>
        <Col span={5}></Col>
        <Col span={14}>
          <TicketForm actionButtons={formButtons} initialData={ticket} />
        </Col>
        <Col span={5}></Col>
      </Row>
      <Row gutter={[16, 16]} className={classes.listRow}>
        <Col span={5}></Col>
        <Col span={14}></Col>
        <Col span={5}></Col>
      </Row>
    </div>
  )
}

export default EditTicket
