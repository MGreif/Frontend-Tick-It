import { Dropdown, Menu, Button } from 'antd'
import React, {useState } from 'react'
import SubBoard from '../../components/SubBoard'
import { IBoard } from './types'
import classes from './BoardDashboard.module.css'
import { useSelector } from 'react-redux'
import { IRootState } from '../../redux/project.reducer'
import BoardSelection from '../../components/BoardSelection'


const BoardDashboard = () => {
  const [board, setBoard] = useState<IBoard | null>(null)


  return (
    <React.Fragment>
      <div className={classes['board-selection']}>
        <BoardSelection setBoard={setBoard} />
      </div>
      <div className={classes['boards-container']}>
        {
          board && board.subBoards.map(subBoard => <SubBoard subBoardData={subBoard} key={subBoard.name} />)
        }
      </div>
    </React.Fragment>
  )
}

export default React.memo(BoardDashboard)