import React from 'react'
import { Breadcrumb, Col, PageHeader, Row } from 'antd'
import classes from './List.module.css'
import TicketForm from '../../components/TicketForm'
import { Link, useHistory } from 'react-router-dom'
import { useCreateNewTicket } from '../../hooks/tickets/useCreateNewTicket'
import { buildRouterLink } from '../../libs/linkBuilder'

const CreateTicket = () => {
  const createNewTicket = useCreateNewTicket()
  const history = useHistory()
  const formButtons = [
    {
      onClick: (data: any) => {
        createNewTicket(data).then(() => history.push('/tickets'))
      },
      label: 'Submit',
    },
  ]
  return (
    <div className={classes.listContainer}>
      <PageHeader
        title="Create Ticket"
        breadcrumb={
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Link to={buildRouterLink('/tickets')}>Tickets</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Create Ticket</Breadcrumb.Item>
          </Breadcrumb>
        }
      />
      <Row gutter={[16, 16]} className={classes.listRow}>
        <Col span={5}></Col>
        <Col span={14}>
          <TicketForm actionButtons={formButtons} />
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

export default CreateTicket
