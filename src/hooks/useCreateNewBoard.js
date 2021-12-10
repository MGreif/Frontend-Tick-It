import { useDispatch, useSelector } from "react-redux"
import * as boardGateway from '../gateway/boards'
import { createNewBoard } from "../redux/project.actions"

export const useCreateNewBoard = () => {
  const dispatch = useDispatch()
  const projectId = useSelector(state => state.activeProject?._id)
  return async (name) => {
    try {

      const result = await boardGateway.createNewBoard({ name, project: projectId, subBoards: [] })
      if (result.status === 200) {
        dispatch(createNewBoard(result.body))
      }
    } catch (error) {
      console.error(error)
    }
  }
}

