import React, {useEffect, useState } from 'react'
import SubBoard from '../../components/SubBoard'
import { IBoard } from '../../types/Board.types'
import classes from './Dashboard.module.css'
import BoardSelection from '../../components/BoardSelection'
import { useSelector } from 'react-redux'
import { IProjectState, IRootState } from '../../redux/project.reducer'
import GenericModal from '../../components/GenericModal'
import CreateSubBoardForm from '../../components/CreateSubBoardForm'
import { useCreateNewSubBoard } from '../../hooks/useCreateNewSubBoard'

const BoardDashboard = () => {
  const [board, setBoard] = useState<IBoard | null>(null)
  const activeProject: IProjectState | null = useSelector<IRootState, IProjectState | null>(state => state.activeProject)

  useEffect(() => {
    const updatedBoard: IBoard | undefined = activeProject?.boards.find(boardEntry => boardEntry._id === board?._id)
    if (updatedBoard) {
      setBoard(updatedBoard,)
    }
  }, [activeProject, board?._id])

  console.log("update", activeProject)
  const createNewSubBoard = useCreateNewSubBoard()
  if (!activeProject) return null

  return (
    <React.Fragment>
      <div className={classes.boardSelection}>
        <BoardSelection setBoard={setBoard} board={board} activeProject={activeProject}/>
        <GenericModal
          title="Create new Board Tile"
          buttonLabel="New Board Tile"
          actions={[{label: "Submit", function: (data: any, close: any) => { createNewSubBoard(data, board?._id); close()}}]}
          content={CreateSubBoardForm}
          buttonClass={classes.modalButton}
        />
      </div>
      <div className={classes.boardsContainer}>
        {
          board?.subBoards?.length
          ? board.subBoards.map(subBoard => <SubBoard subBoardData={subBoard} key={subBoard.name} />)
          : <div>
              <div>No Board Tiles available</div>
            </div>
        }
      </div>
    </React.Fragment>
  )
}

export default React.memo(BoardDashboard)