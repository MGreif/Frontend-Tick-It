import React, {useState } from 'react'
import SubBoard from '../../components/SubBoard'
import { IBoard } from '../../types/Board.types'
import classes from './Dashboard.module.css'
import BoardSelection from '../../components/BoardSelection'
import { useSelector } from 'react-redux'
import { IProjectState, IRootState } from '../../redux/project.reducer'

const BoardDashboard = () => {
  const [board, setBoard] = useState<IBoard | null>(null)
  const activeProject: IProjectState | null = useSelector<IRootState, IProjectState | null>(state => state.activeProject)

  if (!activeProject) return null

  return (
    <React.Fragment>
      <div className={classes.boardSelection}>
        <BoardSelection setBoard={setBoard} board={board} activeProject={activeProject}/>
      </div>
      <div className={classes.boardsContainer}>
        {
          board?.subBoards.length
          ? board.subBoards.map(subBoard => <SubBoard subBoardData={subBoard} key={subBoard.name} />)
          : <div>No Board Tiles available</div>
        }
      </div>
    </React.Fragment>
  )
}

export default React.memo(BoardDashboard)