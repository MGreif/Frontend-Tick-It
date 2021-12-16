import { useDispatch, useSelector } from "react-redux"
import * as subBoardGateway from '../../gateway/subBoards'
import { fetchProjectData } from "../projects/useFetchProjectData"

export const useCreateNewSubBoard = () => {
  const dispatch = useDispatch()
  const projectId = useSelector(state => state.activeProject?._id)
  return async (subBoardData, boardId) => {
    try {
      if (!boardId) throw new Error("No boardId is given")
      const result = await subBoardGateway.createNewSubBoard(subBoardData, boardId)
      if (result.status === 200) {
        fetchProjectData(dispatch, projectId)
      }
    } catch (error) {
      console.error(error)
    }
  }
}

