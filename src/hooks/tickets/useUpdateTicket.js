import { useDispatch, useSelector } from 'react-redux'
import * as ticketGateway from '../../gateway/tickets'
import { fetchProjectData } from '../projects/useFetchProjectData'

export const useUpdateTicket = () => {
  const projectId = useSelector(state => state.activeProject._id)
  const dispatch = useDispatch()

  return async (ticketId, ticketData) => {
    try {
      const result = await ticketGateway.updateTicket(ticketId, ticketData)
      if (result.statusCode === 200) {
        fetchProjectData(dispatch, projectId)
      }
    } catch (error) {
      console.error(error)
    }
  }
}
