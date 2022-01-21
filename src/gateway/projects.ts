import superagent from 'superagent'

const baseUrl = `${process.env.REACT_APP_SERVICE_HOST}:${process.env.REACT_APP_SERVICE_PORT}`

const fetchAllProjectsByUserId: any = () => {
  const url = baseUrl + '/projects/by-user/61ac08cd2a068d56f280c259'
  return superagent.get(url)
}

const fetchProjectData: any = (projectId: string) => {
  const url = baseUrl + '/projects/' + projectId
  return superagent.get(url)
}

export { fetchAllProjectsByUserId, fetchProjectData }
