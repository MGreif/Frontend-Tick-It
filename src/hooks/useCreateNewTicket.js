import { useDispatch, useSelector } from "react-redux"
import * as ticketGateway from '../gateway/tickets'
import { fetchProjectData } from "./projects/useFetchProjectData"

export const useCreateNewTicket = () => {
  const dispatch = useDispatch()
  const projectId = useSelector(state => state.activeProject?._id)
  return async (ticketData) => {
    try {

      const result = await ticketGateway.createNewTicket(ticketData)
      if (result.status === 200) {
        await fetchProjectData(dispatch, projectId)
      }
    } catch (error) {
      console.error(error)
    }
  }
}

