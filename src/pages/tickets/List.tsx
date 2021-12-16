import React from 'react'
import { Col, Row } from 'antd'
import TicketList from '../../components/TicketList'
import classes from './List.module.css'
import ActionBar from '../../components/TicketListActionBar'

const List = () => {
  return (
    <div className={classes.listContainer}>
      <Row gutter={[16, 16]} className={classes.listRow}>
        <Col span={5}>left</Col>
        <Col span={14}><ActionBar /></Col>
        <Col span={5}>right</Col>
      </Row>
      <Row gutter={[16, 16]} className={classes.listRow}>
      <Col span={5}>left</Col>
      <Col span={14}><TicketList /></Col>
      <Col span={5}>right</Col>
      </Row>
    </div>
  )
}

export default List