import React from 'react'
import { ISubBoard } from '../../types'
import classes from './index.module.css'
import GenericModal from '../../GenericModal'
import { DeleteOutlined } from '@ant-design/icons'
import { useDeleteSubBoard } from '../../../hooks/subBoards/useDeleteSubBoard'

interface ICardTitleProps {
  subBoardData: ISubBoard
  currentTicketAmount: number
}

const CardTitle = ({ subBoardData, currentTicketAmount }: ICardTitleProps) => {
  const deleteSubBoard = useDeleteSubBoard()
  return (
    <div className={classes.content}>
      <span>{subBoardData.name}</span>
      <span >
        <GenericModal 
          buttonLabel={<DeleteOutlined />}
          title="Delete Board Tile"
          content={() => <div>Are you sure, that you want to delete the Board Tile?</div>}
          actions={[{label: "Delete", function: () => deleteSubBoard(subBoardData._id), buttonProps: {style: { color: "red", borderColor: "red"}}}]}
          buttonProps={{type: "dashed", className: classes.deleteButton, size:"middle"}}
        />
        <span className={currentTicketAmount > subBoardData.wipLimit ? classes.overflow : ''}>{currentTicketAmount} / {subBoardData.wipLimit}</span>
      </span>
    </div>
  )
}

export default CardTitle