import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as boardGateway from '../gateway/boards'
import * as projectGateway from '../gateway/projects'
import { fetchFail, updateProjectDetails, fetchRequest, fetchSuccess, updateProjects, createNewBoard } from './project.actions'

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

export const useFetchProjectsByUserId = () => {
  const userId = "asd"
  const dispatch = useDispatch()
  useEffect(() => {
    if (!userId) return
    const func = async function() {
      await fetchAllProjectsByUserId(dispatch, userId)
    }
    func()
  }, [userId, dispatch])
}


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

async function fetchAllProjectsByUserId(dispatch, projectId) {
  dispatch(fetchRequest())
  try {
    const { body } = await projectGateway.fetchAllProjectsByUserId(projectId)
    dispatch(fetchSuccess())
    dispatch(updateProjects(body))

  } catch (error) {
    dispatch(fetchFail(error))
  }
}