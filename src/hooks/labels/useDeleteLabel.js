import { useDispatch, useSelector } from "react-redux"
import * as labelGateway from '../../gateway/labels'
import { fetchProjectData } from "../projects/useFetchProjectData"

export const useDeleteLabel = () => {
  const dispatch = useDispatch()
  const projectId = useSelector(state => state.activeProject?._id)

  return async (labelId) => {
    try {
      const result = await labelGateway.deleteLabel(labelId)
      if (result.status === 200) {
        fetchProjectData(dispatch, projectId)
      }
    } catch (error) {
      console.error(error)
    }
  }
}

