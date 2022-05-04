import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { buildRouterLink } from '../../libs/linkBuilder'
import classes from './index.module.css'

const ActionBar = () => {
  return (
    <div className={classes.container}>
      <Button type="primary" href="/labels/create">
        <Link to={buildRouterLink('/labels/create')}>New Label</Link>
      </Button>
      <Button>Test</Button>
    </div>
  )
}

export default ActionBar
