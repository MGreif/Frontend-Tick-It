import { ITicket } from "../../../pages/tickets/types"
import { ISubBoard } from "../../types"

const findMatchingTicketsForSubBoard = (tickets: ITicket[], subBoard: ISubBoard) => {
    return tickets.filter(ticket => ticket?.labels.map(x => x._id).includes(subBoard.filterCriteriaLabel))
}

export { findMatchingTicketsForSubBoard }