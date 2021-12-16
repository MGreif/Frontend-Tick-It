import superagent from 'superagent'
import { ITicket } from '../pages/tickets/types'

const baseUrl = `${process.env.REACT_APP_SERVICE_HOST}:${process.env.REACT_APP_SERVICE_PORT}`

const createNewTicket: any = (ticketData: ITicket) => {

  const url = baseUrl + '/tickets'
  return superagent
    .post(url)
    .send(ticketData)
}

export { createNewTicket }