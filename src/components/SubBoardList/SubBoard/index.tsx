import React from 'react'
import { Card } from 'antd'
import { ISubBoard } from '../../types';
import Ticket from '../../Ticket';
import { useSelector } from 'react-redux';
import { findMatchingTicketsForSubBoard } from './helper/findMatchingTicketForSubBoard';
import CardTitle from './CardTitle';
import classes from './index.module.css'
import { IRootState } from '../../../redux/project.reducer';
import { ITicket } from '../../../pages/tickets/types';
import { DragSource, DropTarget } from 'react-dnd';
import _ from 'lodash';

interface ISubBoardProps {
  subBoardData: ISubBoard,
  showClosed?: boolean,
  isBacklog?: boolean,
  index?: number,
  moveTicket?: any,
  onTicketDrop?: any
}

const SubBoard = ({ subBoardData, showClosed, isBacklog, index, moveTicket, onTicketDrop }: ISubBoardProps) => {
  const tickets: ITicket[] | undefined = useSelector<IRootState, ITicket[] | undefined>(state => state.activeProject?.tickets) || []
  const correspondingTickets = showClosed ? 
    tickets.filter(ticket => ticket.closed) :
    isBacklog ? tickets.filter(ticket => { return !ticket.allocatedSubBoard && (showClosed ? ticket : ticket.closed === false)}) : findMatchingTicketsForSubBoard(tickets.filter(ticket => ticket.closed === false), subBoardData)
  
  return (
      <div className={classes.board}>
        <Card
          title={<CardTitle
            subBoardData={subBoardData}
            currentTicketAmount={correspondingTickets.length}
            />}
            bordered={true}
            >
          {
            correspondingTickets.map(ticket => (
              <DraggableTicket key={ticket.title} ticketData={ticket} subBoardIndex={index} subBoardId={subBoardData._id} moveTicket={moveTicket} onTicketDrop={onTicketDrop}/>
              ))
          }
          {
            correspondingTickets.length === 0 && <DraggableTicket isSpacer moveTicket={moveTicket} onTicketDrop={onTicketDrop} subBoardIndex={index} subBoardId={subBoardData._id}/>
          }
        </Card>
      </div>
  )
}

export default SubBoard

export const DraggableTicket = _.flowRight([
  DropTarget(
    'Card',
    {
      hover(props: any, monitor) {
        const {subBoardId, subBoardIndex}: any = props;
        const draggingItem = monitor.getItem();
        if (draggingItem.id !== props.ticketData?._id) {
          props?.moveTicket(draggingItem.id, subBoardId, subBoardIndex);
        }
      },
      drop(props: any, monitor) {
        const {subBoardId, subBoardIndex}: any = props;
        const draggingItem = monitor.getItem();
        if (draggingItem.id !== props.ticketData?._id) {
          props?.onTicketDrop(draggingItem.id, subBoardId, subBoardIndex);
        }
      },
    },
    connect => ({
      connectDropTarget: connect.dropTarget(),
    })
  ),
  DragSource(
    'Card',
    {
      beginDrag(props: any) {
        return {id: props.ticketData?._id};
      },

      isDragging(props, monitor) {
        return props.ticketData?._id === monitor.getItem().id;
      },
    },
    (connect, monitor) => ({
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging(),
    })
  ),
])(Ticket);
