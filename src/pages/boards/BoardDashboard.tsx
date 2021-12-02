import { Row } from 'antd'
import React from 'react'
import SubBoard from '../../components/SubBoard'
import { BOARDS } from '../../constants/dummyData'
import classes from './BoardDashboard.module.css'

const BoardDashboard = () => {
  return (
    <React.Fragment>
      <div className={classes['boards-container']}>
        <Row gutter={16}>
          {
            BOARDS[0].subBoards.map(subBoard => <SubBoard subBoardData={subBoard} />)
          }
        </Row>
      </div>
    </React.Fragment>
  )
}

export default BoardDashboard