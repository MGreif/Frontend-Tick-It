import React from 'react'
import { Col, Row } from 'antd'
import classes from './List.module.css'
import TicketForm from '../../components/TicketForm'

const CreateTicket = ({ history }: any) => {
  return (
    <div className={classes.listContainer}>
      <Row gutter={[16, 16]} className={classes.listRow}>
        <Col span={5}></Col>
        <Col span={14}>
          <TicketForm history={history} />
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
