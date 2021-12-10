import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchFail, fetchRequest, fetchSuccess, updateProjectDetails } from "../redux/project.actions"
import * as projectGateway from '../gateway/projects'

async function fetchProjectData(dispatch, projectId) {
  dispatch(fetchRequest())
  try {
    const { body } = await projectGateway.fetchProjectData(projectId)
    dispatch(fetchSuccess())
    dispatch(updateProjectDetails(body))

  } catch (error) {
    dispatch(fetchFail(error))
  }
}

export const useFetchProjectData = (projectId) => {
  const dispatch = useDispatch()
  useEffect(() => {
    if (!projectId) return
    const func = async function() {
      await fetchProjectData(dispatch, projectId)
    }
    func()
  }, [projectId, dispatch])
}