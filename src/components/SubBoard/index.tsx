import React from 'react'
import { Card, Col,  } from 'antd'
import { TICKETS } from '../../constants/dummyData';
import { ISubBoard } from '../types';
import Ticket from '../Ticket';
import { findMatchingTicketsForSubBoard } from './helper/findMatchingTicketForSubBoard';
import CardTitle from './CardTitle';

interface ISubBoardProps {
  subBoardData: ISubBoard
}

const SubBoard = ({ subBoardData }: ISubBoardProps) => {

  const correspondingTickets = findMatchingTicketsForSubBoard(TICKETS, subBoardData)



  return (
    <Col span={8}>
      <Card title={<CardTitle
        wipLimit={subBoardData.wipLimit}
        title={subBoardData.title}
        currentTicketAmount={correspondingTickets.length}
      />} bordered={true}>
        {
          correspondingTickets.map(ticket => (
            <Ticket ticketData={ticket} />
          ))
        }
      </Card>
    </Col>
  )
}

export default SubBoard