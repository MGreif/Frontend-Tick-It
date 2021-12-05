import superagent from 'superagent'
import { useDispatch } from 'react-redux'
import { fetchFail, fetchRequest, fetchSuccess } from './project.actions'


export const useFetchProjectsByUserId = (userId) => {
    const dispatch = useDispatch()
    const url = `${process.env.REACT_APP_SERVICE_HOST}:${process.env.REACT_APP_SERVICE_PORT}/projects/${"61ac08cd2a068d56f280c259"}`
    async function fetchInitialProjectData () { 
        dispatch(fetchRequest())
        superagent.get(url)
            .then((result) => {dispatch(fetchSuccess({
                projects: result.body.projects,
                boards: result.body.boards,
                tickets: result.body.tickets,
                labels: result.body.labels
            })); return result })
            .catch((error) => dispatch(fetchFail(error)))
    }
    return fetchInitialProjectData
}