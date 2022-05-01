import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { IBoard } from '../../types/Board.types'
import SubBoard from './SubBoard'
import classes from './index.module.css'
import { useMoveTicket } from '../../hooks/tickets/useMoveTicket'
import { fetchProjectData } from '../../hooks/projects/useFetchProjectData'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../redux/project.reducer'

interface ISubBoardListProps {
  board: IBoard | null
}

const SubBoardList = ({ board }: ISubBoardListProps) => {
  const moveTicketDrop = useMoveTicket()
  const projectId: string | undefined = useSelector<
    IRootState,
    string | undefined
  >((state) => state.activeProject?._id)
  const dispatch = useDispatch()
  if (!board) return null

  if (!board.subBoards.length) return <div>No Board Tiles available</div>

  const moveTicket = () => {
    //cardId: any, destColumnId: any, index: any) => {
    //on move
  }

  const onTicketDrop = (cardId: any, destColumnId: any, index: any) => {
    console.log('drop', cardId, destColumnId, index)
    moveTicketDrop(cardId, destColumnId, index).then(() =>
      fetchProjectData(dispatch, projectId)
    )
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={classes.boardsContainer}>
        <SubBoard
          subBoardData={{
            name: 'Backlog',
            filterCriteriaLabel: null,
            wipLimit: null,
            _id: 'backlog',
          }}
          isBacklog={true}
          index={0}
          moveTicket={moveTicket}
          onTicketDrop={onTicketDrop}
        />
        {board.subBoards.map((subBoard, index) => (
          <SubBoard
            subBoardData={subBoard}
            key={subBoard.name}
            index={index + 1}
            moveTicket={moveTicket}
            onTicketDrop={onTicketDrop}
          />
        ))}
        <SubBoard
          subBoardData={{
            name: 'Closed',
            filterCriteriaLabel: null,
            wipLimit: null,
            _id: 'closed',
          }}
          showClosed={true}
          index={10}
          moveTicket={moveTicket}
          onTicketDrop={onTicketDrop}
        />
      </div>
    </DndProvider>
  )
}

export default SubBoardList
