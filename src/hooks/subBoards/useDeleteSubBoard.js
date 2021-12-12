import { useDispatch, useSelector } from "react-redux"
import * as subBoardGateway from '../../gateway/subBoards'
import { fetchProjectData } from "../projects/useFetchProjectData"

export const useDeleteSubBoard = () => {
  const dispatch = useDispatch()
  const projectId = useSelector(state => state.activeProject?._id)

  return async (subBoardId) => {
    try {
      const result = await subBoardGateway.deleteSubBoard(subBoardId)
      if (result.status === 200) {
        fetchProjectData(dispatch, projectId)
      }
    } catch (error) {
      console.error(error)
    }
  }
}

