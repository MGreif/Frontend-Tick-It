import React from 'react'
import { Card, Col,  } from 'antd'
import { TICKETS } from '../../constants/dummyData';
import { ISubBoard, ITicket } from '../types';
import Ticket from '../Ticket';
import { findMatchingTicketsForSubBoard } from './helper/findMatchingTicketForSubBoard';



interface ISubBoardProps {
  subBoardData: ISubBoard
}

const SubBoard = ({ subBoardData }: ISubBoardProps) => {

  const correspondingTickets = findMatchingTicketsForSubBoard(TICKETS, subBoardData)

  console.log(subBoardData, correspondingTickets)

  return (
    <Col span={8}>
      <Card title={subBoardData.title} bordered={true}>
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