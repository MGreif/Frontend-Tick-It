import * as ticketGateway from '../../gateway/tickets'

export const useMoveTicket = () => {
  return async (ticketId, subBoardId, index) => {
    try {
      await ticketGateway.moveTicket(ticketId, subBoardId, index)
    } catch (error) {
      console.error(error)
    }
  }
}

