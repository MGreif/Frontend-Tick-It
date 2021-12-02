import { Card } from 'antd'
import React from 'react'
import { ITicket } from './types'

interface ITicketProps {
  ticketData: ITicket
}

const Ticket = ({ ticketData }: ITicketProps) => {
  return (
    <Card title={ticketData.title} bordered={true} />
  )
}

export default Ticket