import React from 'react'
import BoardSelection from '../BoardSelection'
import classes from './index.module.css'
import GenericModal from '../GenericModal'
import CreateSubBoardForm from '../SubBoardList/SubBoard/CreateSubBoardForm'
import { useCreateNewSubBoard } from '../../hooks/subBoards/useCreateNewSubBoard'
import { IProjectState } from '../../redux/project.reducer'
import { IBoard } from '../../types/Board.types'

interface IBoardListActionBar {
  activeProject: IProjectState,
  board: IBoard | null,
  setBoard: any
}

const BoardListActionBar = ({ setBoard, board, activeProject }: IBoardListActionBar) => {
  const createNewSubBoard = useCreateNewSubBoard()

  return (
    <div>
    <BoardSelection setBoard={setBoard} board={board} activeProject={activeProject} />
    <GenericModal
      title="Create new Board Tile"
      buttonLabel="New Board Tile"
      actions={[{ label: "Submit", function: (data: any) => createNewSubBoard(data, board?._id) }]}
      content={CreateSubBoardForm}
      buttonClass={classes.modalButton}
    />
  </div>
  )
}

export default BoardListActionBar