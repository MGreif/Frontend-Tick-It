import { FETCH_FAILED, FETCH_REQUESTED, FETCH_SUCCEEDED, UPDATE_PROJECTS, UPDATE_PROJECT_DETAILS } from "./project.actionTypes"

export const fetchRequest = () => {
  return {
    type: FETCH_REQUESTED
  }
}

export const fetchSuccess = (result) => {
  return {
    type: FETCH_SUCCEEDED,
    payload: result
  }
}

export const fetchFail = (error) => {
  return {
    type: FETCH_FAILED,
    payload: error
  }
}

export const updateProjects = (projects) => {
  return {
    type: UPDATE_PROJECTS,
    payload: projects
  }
}

export const updateProjectDetails = (projectData) => {
  return {
    type: UPDATE_PROJECT_DETAILS,
    payload: projectData
    }
}
