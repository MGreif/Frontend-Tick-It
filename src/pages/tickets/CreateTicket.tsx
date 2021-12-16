import React from 'react'
import { Col, Row } from 'antd'
import TicketList from '../../components/TicketList'
import classes from './List.module.css'
import ActionBar from '../../components/TicketListActionBar'
import TicketForm from '../../components/TicketForm'

const CreateTicket = () => {
  return (
    <div className={classes.listContainer}>
      <Row gutter={[16, 16]} className={classes.listRow}>
        <Col span={5}>left</Col>
        <Col span={14}><TicketForm /></Col>
        <Col span={5}>right</Col>
      </Row>
      <Row gutter={[16, 16]} className={classes.listRow}>
      <Col span={5}>left</Col>
      <Col span={14}><span>abc</span></Col>
      <Col span={5}>right</Col>
      </Row>
    </div>
  )
}

export default CreateTicket