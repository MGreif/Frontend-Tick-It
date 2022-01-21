import superagent from 'superagent'
import { ITicket } from '../pages/tickets/types'

const baseUrl = `${process.env.REACT_APP_SERVICE_HOST}:${process.env.REACT_APP_SERVICE_PORT}`

const createNewTicket: any = (ticketData: ITicket) => {

  const url = baseUrl + '/tickets'
  return superagent
    .post(url)
    .send(ticketData)
}

const updateTicket: any = (ticketId: string, ticketData: ITicket) => {
  if (!ticketId) return

  const url = baseUrl + '/tickets/' + ticketId
  return superagent
    .patch(url)
    .send(ticketData)
}

const getDetailedTicket: any = (ticketId: string) => {
  if (!ticketId) return

  const url = baseUrl + '/tickets/' + ticketId

  return superagent
    .get(url)
}




export { createNewTicket, updateTicket, getDetailedTicket }