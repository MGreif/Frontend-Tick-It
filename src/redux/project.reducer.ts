import { IBoard } from '../types/Board.types'
import { ILabel } from '../pages/labels/types'
import { ITicket } from '../pages/tickets/types'
import { IUser } from '../pages/users/types'
import * as projectActionTypes from './project.actionTypes'
import * as subBoardActionTypes from './subBoard.actionTypes'

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
  const stateClone : IRootState = { ...state }

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
          activeProject: { ...state.activeProject, ...action.payload }
        }
      case projectActionTypes.UPDATE_PROJECTS:
        return {
          ...state,
          projects: action.payload
        }
      case projectActionTypes.CREATE_NEW_BOARD:
        if (stateClone.activeProject?.boards) {
          stateClone.activeProject.boards = [...stateClone.activeProject.boards, action.payload]
        }
        return stateClone
      case subBoardActionTypes.CREATE_NEW_SUBBOARD:
        const boards: IBoard[] = action.payload.subBoardData
        if (stateClone.activeProject?.boards) {
          stateClone.activeProject.boards = boards
        }
        return stateClone
      default:
        return state
    }
  }

export { projectReducer }