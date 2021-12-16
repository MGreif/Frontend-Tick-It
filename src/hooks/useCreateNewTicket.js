import { useDispatch, useSelector } from "react-redux"
import * as ticketGateway from '../gateway/tickets'
import { fetchProjectData } from "./projects/useFetchProjectData"

export const useCreateNewTicket = () => {
  return async (ticketData) => {
    try {
      await ticketGateway.createNewTicket(ticketData)
    } catch (error) {
      console.error(error)
    }
  }
}

