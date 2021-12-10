import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchFail, fetchRequest, fetchSuccess, updateProjects } from '../redux/project.actions'
import * as projectGateway from '../gateway/projects'

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