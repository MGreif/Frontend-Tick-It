import superagent from 'superagent'
import { IProject } from '../types/Project.types'

const baseUrl = `${process.env.REACT_APP_SERVICE_HOST}:${process.env.REACT_APP_SERVICE_PORT}`

const fetchAllProjectsByUserId: any = (userId: string) => {
  const url = baseUrl + '/projects/by-user/' + userId
  return superagent.get(url).set('Access-Controll-Allow-Origin', '*')
}

const fetchProjectData: any = (projectId: string) => {
  const url = baseUrl + '/projects/' + projectId
  return superagent.get(url)
}

const createProject: any = (projectData: Partial<IProject>) => {
  const url = baseUrl + '/projects/'
  console.log(url, projectData)
  return superagent.post(url).send(projectData)
}

export { fetchAllProjectsByUserId, fetchProjectData, createProject }
