import * as ticketGateway from '../../gateway/tickets'

export const useCreateNewTicket = () => {
  return async (ticketData) => {
    try {
      await ticketGateway.createNewTicket(ticketData)
    } catch (error) {
      console.error(error)
    }
  }
}

