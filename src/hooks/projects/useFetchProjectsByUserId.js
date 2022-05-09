import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchFail,
  fetchRequest,
  fetchSuccess,
  updateProjects,
} from '../../redux/project.actions'
import * as projectGateway from '../../gateway/projects'
export const useFetchProjectsByUserId = () => {
  const userId = useSelector((state) => state.authentication.user._id)
  console.log('fetch by userId', userId)
  const dispatch = useDispatch()
  useEffect(() => {
    if (!userId) return
    const func = async function () {
      await fetchAllProjectsByUserId(dispatch, userId)
    }
    func()
  }, [userId, dispatch])
}

async function fetchAllProjectsByUserId(dispatch, userId) {
  dispatch(fetchRequest())
  try {
    const { body } = await projectGateway.fetchAllProjectsByUserId(userId)
    dispatch(fetchSuccess())
    dispatch(updateProjects(body))
  } catch (error) {
    dispatch(fetchFail(error))
  }
}
