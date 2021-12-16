import { Button } from 'antd'
import React from 'react'
import classes from './index.module.css'

const ActionBar = () => {
  return (
    <div className={classes.container}>
      <Button type="primary">
        New Ticket
      </Button>
      <Button>
        Test
      </Button>
    </div>
  )
}

export default ActionBar