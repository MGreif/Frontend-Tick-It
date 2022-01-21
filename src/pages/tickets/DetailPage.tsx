import { Breadcrumb, Col, PageHeader, Row } from 'antd'
import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
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
          <Breadcrumb.Item ><Link to={'/projects'}>Boards</Link></Breadcrumb.Item>
        <Breadcrumb.Item >Ticket Details</Breadcrumb.Item>
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