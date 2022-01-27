import { Button, Col, Divider, Row } from 'antd'
import React from 'react'
import { ITicket } from '../../pages/tickets/types'
import classes from './index.module.css'
import RelatedTicketsSection from './RelatedTicketsSection'
import markdown_it from 'markdown-it'
import { Link } from 'react-router-dom'

const md = new markdown_it({
  html: false,

})


interface ITicketDetailProps {
  ticketData: ITicket
}

const TicketDetails = ({ ticketData }: ITicketDetailProps) => {
  return (
    <div className={classes.content}>
      <div className={classes['flex-container-space-between']}>
        <h1>{ticketData.title}</h1>
        <Button type='primary'><Link to={'/tickets/edit/' + ticketData?._id} >Edit Ticket</Link></Button>
      </div>
      <Divider orientation="left">Description</Divider>
      <p dangerouslySetInnerHTML={{__html: md.render(ticketData.description || '')}}></p>
      {ticketData.relatedTickets?.length > 0 && <RelatedTicketsSection relatedTickets={ticketData.relatedTickets}/>}
      <Divider orientation="left">Meta-Details</Divider>
      <Row gutter={[16, 16]} className={classes.listRow}>
        <Col span={8}>Weight: {ticketData.weight}</Col>
        <Col span={8}>Due: {new Date(ticketData.dateDue).toDateString()}</Col>
        <Col span={8}>Last update: {new Date(ticketData.updatedAt).toDateString()}</Col>
        <Col span={8}>Created By: {ticketData.createdBy?.username}</Col>
      </Row>
    </div>
  ) 
}

export default TicketDetails