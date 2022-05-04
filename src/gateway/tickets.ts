import superagent from 'superagent'
import { ITicket } from '../pages/tickets/types'
import { BASE_URL } from './constants'

const createNewTicket: any = (ticketData: ITicket) => {
  const url = BASE_URL + '/tickets'
  return superagent.post(url).send(ticketData)
}

const moveTicket: any = (
  ticketId: string,
  subBoardId: string,
  index: number
) => {
  const url = BASE_URL + '/tickets/' + ticketId + '/move'
  return superagent.patch(url).send({ subBoardId, index })
}

const updateTicket: any = (ticketId: string, ticketData: ITicket) => {
  if (!ticketId) return

  const url = BASE_URL + '/tickets/' + ticketId
  return superagent.patch(url).send(ticketData)
}

const getDetailedTicket: any = (ticketId: string) => {
  if (!ticketId) return

  const url = BASE_URL + '/tickets/' + ticketId

  return superagent.get(url)
}

const deleteTicket: any = (ticketId: string) => {
  if (!ticketId) return

  const url = BASE_URL + '/tickets/' + ticketId

  return superagent.delete(url)
}

export {
  createNewTicket,
  updateTicket,
  getDetailedTicket,
  moveTicket,
  deleteTicket,
}
