import React from 'react'
import { Breadcrumb, Col, PageHeader, Row } from 'antd'
import classes from './List.module.css'
import LabelForm from '../../components/LabelForm'
import { Link } from 'react-router-dom'
import { buildRouterLink } from '../../libs/linkBuilder'

const CreateLabel = ({ history }: any) => {
  return (
    <div className={classes.listContainer}>
      <PageHeader
        title="Create Label"
        breadcrumb={
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Link to={buildRouterLink('/labels')}>Labels</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Create Label</Breadcrumb.Item>
          </Breadcrumb>
        }
      />
      <Row gutter={[16, 16]} className={classes.listRow}>
        <Col span={5}></Col>
        <Col span={14}>
          <LabelForm history={history} />
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

export default CreateLabel
