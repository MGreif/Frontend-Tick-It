import { useMoveTicketMutation } from "../../Api/tickets"

export const useMoveTicket = () => {
    const [moveTicket] = useMoveTicketMutation()
    return async (ticketId, subBoardId, index) => {
        try {
            await moveTicket({ ticketId, subBoardId, index })
        } catch (error) {
            console.error(error)
        }
    }
}
