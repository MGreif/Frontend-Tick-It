import React from 'react'
import { IBoard } from '../../types/Board.types'
import SubBoard from './SubBoard'
import classes from './index.module.css'

interface ISubBoardListProps {
  board: IBoard | null
}

const SubBoardList = ({ board }: ISubBoardListProps) => {

  if (!board) return null
  
  if (!board.subBoards.length) return <div>No Board Tiles available</div>

  return (
    <div className={classes.boardsContainer}>
    {
      board.subBoards.map(subBoard => <SubBoard subBoardData={subBoard} key={subBoard.name} />)
    }
  </div>
  )
}

export default SubBoardList