import * as ticketGateway from '../../gateway/tickets'

export const useDeleteTicket = () => {
  return async (ticketId) => {
    try {
      await ticketGateway.deleteTicket(ticketId)
    } catch (error) {
      console.error(error)
    }
  }
}

