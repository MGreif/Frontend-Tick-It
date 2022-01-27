import { Card } from 'antd'
import React from 'react'
import classes from './index.module.css'
import Label from '../Label'
import CardTitle from './CardTitle'
import _ from 'lodash'

const formatTime = (_date: Date) => {

  const date = new Date(_date)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  return `${year}-${month}-${day}`
}

const Ticket = (props: any) => {
  return _.flowRight(props.connectDragSource, props.connectDropTarget)(
    <div className={classes.ticketContainer}>
      <Card
        title={props.ticketData && <CardTitle ticket={props.ticketData}/>}
        bordered={true}
        >
        <div style={{position: "relative", paddingBottom: "1.3em"}}>
          <div className={classes.labelContainer}>
            {
              props.ticketData?.labels.map((label: any) => <Label labelData={label} key={label._id}/>)
            }
          </div>
          {props.ticketData?.weight && <span className={classes.weight}>weight: {props.ticketData.weight}</span>}
          {props.ticketData?.dateDue && <span className={classes.dueDate}>Due: {formatTime(props.ticketData.dateDue)}</span> }
        </div>
      </Card>
    </div>
  )
}

export default Ticket