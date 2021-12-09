import React from 'react'
import { Card } from 'antd'
import { ISubBoard } from '../types';
import Ticket from '../Ticket';
import { findMatchingTicketsForSubBoard } from './helper/findMatchingTicketForSubBoard';
import CardTitle from './CardTitle';
import classes from './index.module.css'
import { useSelector } from 'react-redux';
import { IRootState } from '../../redux/project.reducer';

interface ISubBoardProps {
  subBoardData: ISubBoard,
}

const SubBoard = ({ subBoardData }: ISubBoardProps) => {

  const tickets: any = useSelector<IRootState>(state => state.activeProject?.tickets)

  console.log("subBoarddata",subBoardData)
  const correspondingTickets = findMatchingTicketsForSubBoard(tickets, subBoardData)
  return (
    <div className={classes.board}>
      <Card title={<CardTitle
        wipLimit={subBoardData.wipLimit}
        title={subBoardData.name}
        currentTicketAmount={correspondingTickets.length}
      />} bordered={true}>
        {
          correspondingTickets.map(ticket => (
            <Ticket ticketData={ticket} />
          ))
        }
      </Card>
    </div>
  )
}

export default SubBoard