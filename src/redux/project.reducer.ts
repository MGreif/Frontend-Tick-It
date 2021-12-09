import { IBoard } from '../pages/boards/types'
import { ILabel } from '../pages/labels/types'
import { ITicket } from '../pages/tickets/types'
import { IUser } from '../pages/users/types'
import * as projectActionTypes from './project.actionTypes'

export interface IProjectState {
    boards: IBoard[],
    labels: ILabel[],
    members: IUser[],
    tickets: ITicket[],
    name: String,
    description: String,
    createdBy: IUser,
    _id: String
}

export interface IRootState {
  projects: [],
  activeProject: IProjectState | null,
  isFetching: Boolean,
  error: any
}

const initialState: IRootState = {
  projects: [],
  activeProject: null,
  isFetching: false,
  error: null
}

function projectReducer(state: IRootState = initialState, action: { type: String, payload: any }) {
    switch (action.type) {
      case projectActionTypes.FETCH_REQUESTED:
        return { ...state, isFetching: true }
      case projectActionTypes.FETCH_SUCCEEDED:
        return { ...state, isFetching: false }
      case projectActionTypes.FETCH_FAILED:
        return { ...state, isFetching: false, error: action.payload }
      case projectActionTypes.UPDATE_PROJECT_DETAILS:
        return {
          ...state,
          activeProject: {
            boards: action.payload.boards,
            labels: action.payload.labels,
            members: action.payload.members,
            tickets: action.payload.tickets,
            _id: action.payload._id,
            createdBy: action.payload.createdBy,
            name: action.payload.name,
            description: action.payload.description
          }
        }
      case projectActionTypes.UPDATE_PROJECTS:
        return {
          ...state,
          projects: action.payload
        }
      default:
        return state
    }
  }

export { projectReducer }