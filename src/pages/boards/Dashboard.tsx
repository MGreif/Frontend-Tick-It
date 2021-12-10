import React, {useState } from 'react'
import SubBoard from '../../components/SubBoard'
import { IBoard } from '../../types/Board.types'
import classes from './Dashboard.module.css'
import BoardSelection from '../../components/BoardSelection'

const BoardDashboard = () => {
  const [board, setBoard] = useState<IBoard | null>(null)

  return (
    <React.Fragment>
      <div className={classes['board-selection']}>
        <BoardSelection setBoard={setBoard} board={board}/>
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