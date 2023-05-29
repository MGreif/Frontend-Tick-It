import React from "react"
import { Card } from "antd"
import { ISubBoard } from "../../types"
import Ticket from "../../Ticket"
import { useSelector } from "react-redux"
import { findMatchingTicketsForSubBoard } from "./helper/findMatchingTicketForSubBoard"
import CardTitle from "./CardTitle"
import classes from "./index.module.css"
import {
    IProjectRootState,
    useGetProject,
    useProjectSlice,
} from "../../../redux/project.reducer"
import { ITicket } from "../../../pages/tickets/types"
import { useDrag, useDrop } from "react-dnd"
import _ from "lodash"
import { ItemTypesDnD } from "../ItemTypesDnD"

interface ISubBoardProps {
    subBoardData: ISubBoard
    showClosed?: boolean
    isBacklog?: boolean
    index?: number
    moveTicket?: any
    onTicketDrop?: any
    removeDeleteButton?: boolean
}
const SubBoard = ({
    subBoardData,
    showClosed,
    isBacklog,
    index,
    moveTicket,
    removeDeleteButton,
    onTicketDrop,
}: ISubBoardProps) => {
    const tickets = useGetProject().activeProject?.tickets || []
    const correspondingTickets = showClosed
        ? tickets.filter((ticket) => ticket.closed)
        : isBacklog
        ? tickets.filter((ticket) => {
              return (
                  !ticket.allocatedSubBoard &&
                  (showClosed ? ticket : ticket.closed === false)
              )
          })
        : findMatchingTicketsForSubBoard(
              tickets.filter((ticket) => ticket.closed === false),
              subBoardData
          )
    const [{ isOver }, drop] = useDrop(() => ({
        accept: ItemTypesDnD.TICKET,
        drop: (item: ITicket) => {
            console.log("item", item)
            onTicketDrop(item._id, subBoardData._id, 0)
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }))

    return (
        <div className={classes.board}>
            <Card
                style={{
                    backgroundColor: isOver ? "#EEEEEE" : "white",
                }}
                title={
                    <CardTitle
                        showDelete={!removeDeleteButton}
                        subBoardData={subBoardData}
                        currentTicketAmount={correspondingTickets.length}
                    />
                }
                bordered={true}
            >
                <div style={{ height: "100%", width: "100%" }} ref={drop}>
                    {correspondingTickets.map((ticket, index) => (
                        <DraggableTicket key={index} ticket={ticket} />
                    ))}
                    {correspondingTickets.length === 0 && (
                        <Ticket isSpacer={true} />
                    )}
                </div>
            </Card>
        </div>
    )
}

export const DraggableTicket = ({
    ticket,
    isSpacer,
}: {
    ticket?: ITicket
    isSpacer?: boolean
}) => {
    const [{ isDragging }, drag] = useDrag(
        () => ({
            type: ItemTypesDnD.TICKET,
            item: ticket,
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
        }),
        [ticket]
    )
    return (
        <div ref={drag}>
            <Ticket ticket={ticket} isSpacer={isSpacer} />
        </div>
    )
}

export default SubBoard
