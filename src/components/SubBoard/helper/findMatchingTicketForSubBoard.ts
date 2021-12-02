import { ISubBoard, ITicket } from "../../types"

const findMatchingTicketsForSubBoard = (tickets: ITicket[], subBoard: ISubBoard) => {
    return tickets.filter(ticket => ticket?.labels.map(x => x.name).includes(subBoard.filterCriteriaLabel.name))
}

export { findMatchingTicketsForSubBoard }