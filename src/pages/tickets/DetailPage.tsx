import { Breadcrumb, Col, PageHeader, Row } from 'antd'
import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import TicketDetails from '../../components/TicketDetails'
import { useGetDetailedTicket } from '../../hooks/tickets/useGetDetailedTicket'
import classes from './DetailPage.module.css'

const DetailPage = () => {

  const { ticketId }: any = useParams()
  const { ticket, fetchTicket }: any = useGetDetailedTicket()

  useEffect(() => {
    fetchTicket(ticketId)
  }, [ticketId, fetchTicket])

  if (!ticket) return <div>No ticket</div>

  return (
    <div>

      <PageHeader
        title="Ticket Details"
        breadcrumb={<Breadcrumb separator=">">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/project">Application Center</Breadcrumb.Item>
        <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>}
      />
      <Row gutter={[16, 16]} className={classes.listRow}>
        <Col span={3}></Col>
        <Col span={18}>
          <TicketDetails ticketData={ticket}/>
        </Col>
        <Col span={3}></Col>
      </Row>
    </div>
  )
}

export default DetailPage