import { useDispatch } from 'react-redux'
import { setUser } from '../../redux/project.actions'

export const useSetUser = () => {
  const dispatch = useDispatch()
  return async (user) => {
    try {
      await dispatch(setUser(user))
    } catch (error) {
      console.error(error)
    }
  }
}
