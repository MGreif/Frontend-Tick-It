import React from "react"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { IBoard } from "../../types/Board.types"
import SubBoard from "./SubBoard"
import classes from "./index.module.css"
import { useDispatch, useSelector } from "react-redux"
import { IProjectRootState, useGetProject, useProjectSlice } from "../../redux/project.reducer"
import { useMoveTicketMutation } from "../../Api/tickets"

interface ISubBoardListProps {
    board: IBoard | null
}

const SubBoardList = ({ board }: ISubBoardListProps) => {
    const [moveTicketDrop] = useMoveTicketMutation()
    const { activeProject } = useGetProject()
    if (!board || !activeProject) return null

    if (!board.subBoards.length) return <div>No Board Tiles available</div>

    const moveTicket = () => {
        //cardId: any, destColumnId: any, index: any) => {
        //on move
    }

    const onTicketDrop = (ticketId: any, destColumnId: any, index: any) => {
        console.log("drop", ticketId, destColumnId, index)
        moveTicketDrop({ ticketId, subBoardId: destColumnId, index })
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={classes.boardsContainer}>
                <SubBoard
                    subBoardData={{
                        name: "Backlog",
                        filterCriteriaLabel: null,
                        wipLimit: null,
                        _id: "backlog",
                    }}
                    isBacklog={true}
                    index={0}
                    moveTicket={moveTicket}
                    onTicketDrop={onTicketDrop}
                    removeDeleteButton={true}
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
                        name: "Closed",
                        filterCriteriaLabel: null,
                        wipLimit: null,
                        _id: "closed",
                    }}
                    showClosed={true}
                    index={10}
                    moveTicket={moveTicket}
                    onTicketDrop={onTicketDrop}
                    removeDeleteButton={true}
                />
            </div>
        </DndProvider>
    )
}

export default SubBoardList
