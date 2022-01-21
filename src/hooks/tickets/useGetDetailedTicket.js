import { useState } from "react"
import { getDetailedTicket } from "../../gateway/tickets"
import _ from 'lodash'

const useGetDetailedTicket = () => {
  const [ticket, setTicket] = useState({})

  const fetchTicket = async (ticketId) => {
    const result = await getDetailedTicket(ticketId)

    console.log(result)

    const { statusCode, body } = result

    if (statusCode === 200) {
      if (_.isEqual(ticket, body)) return
      setTicket(body)
    }
  }

  return {
    ticket,
    fetchTicket
  }

}

export { useGetDetailedTicket }