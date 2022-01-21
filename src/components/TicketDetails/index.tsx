import { Col, Divider, Row } from 'antd'
import React from 'react'
import { ITicket } from '../../pages/tickets/types'
import classes from './index.module.css'
import RelatedTicketsSection from './RelatedTicketsSection'
import markdown_it from 'markdown-it'

const md = new markdown_it({
  html: false,

})


interface ITicketDetailProps {
  ticketData: ITicket
}

const TicketDetails = ({ ticketData }: ITicketDetailProps) => {
  console.log(ticketData.description)
  return (
    <div className={classes.content}>
      <h1>{ticketData.title}</h1>
      <Divider orientation="left">Description</Divider>
      <p dangerouslySetInnerHTML={{__html: md.render(ticketData.description || '')}}></p>
      {ticketData.relatedTickets?.length > 0 && <RelatedTicketsSection relatedTickets={ticketData.relatedTickets}/>}
      <Divider orientation="left">Meta-Details</Divider>
      <Row gutter={[16, 16]} className={classes.listRow}>
        <Col span={8}>a</Col>
        <Col span={8}>b</Col>
        <Col span={8}>c</Col>
      </Row>
    </div>
  ) 
}

export default TicketDetails