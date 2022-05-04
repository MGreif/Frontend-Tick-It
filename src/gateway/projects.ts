import superagent from 'superagent'
import { IProject } from '../types/Project.types'
import { BASE_URL } from './constants'

const fetchAllProjectsByUserId: any = (userId: string) => {
  const url = BASE_URL + '/projects/by-user/' + userId
  return superagent.get(url).set('Access-Controll-Allow-Origin', '*')
}

const fetchProjectData: any = (projectId: string) => {
  const url = BASE_URL + '/projects/' + projectId
  return superagent.get(url)
}

const createProject: any = (projectData: Partial<IProject>) => {
  const url = BASE_URL + '/projects/'
  console.log(url, projectData)
  return superagent.post(url).send(projectData)
}

export { fetchAllProjectsByUserId, fetchProjectData, createProject }
