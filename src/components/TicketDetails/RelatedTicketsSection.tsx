import { Divider } from 'antd'
import React from 'react'

interface IRelatedTicketsSectionProps {
  relatedTickets: any[]
}

const RelatedTicketsSection = ({ relatedTickets }: IRelatedTicketsSectionProps) => {
  return (
    <React.Fragment>
      <Divider orientation="left">RelatedTickets</Divider>
      {
        relatedTickets.map(ticket => <div>{ticket.title}</div>)
      }
    </React.Fragment>
  )
}

export default RelatedTicketsSection