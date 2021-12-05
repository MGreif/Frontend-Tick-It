import { FETCH_FAILED, FETCH_REQUESTED, FETCH_SUCCEEDED } from "./project.actionTypes"

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

export const fetchProjects = (dispatch) => {
    
}

export const fetchProjectsByUserId = (userId) => {

}

export const fetchProjectDetails = () => {

}