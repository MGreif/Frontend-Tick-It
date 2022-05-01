import { IBoard } from '../types/Board.types'
import { ILabel } from '../pages/labels/types'
import { ITicket } from '../pages/tickets/types'
import { IUser } from '../pages/users/types'
import * as projectActionTypes from './project.actionTypes'
import * as subBoardActionTypes from './subBoard.actionTypes'
import { IProject } from '../types/Project.types'

export interface IProjectState {
  boards: IBoard[]
  labels: ILabel[]
  members: IUser[]
  tickets: ITicket[]
  name: string
  description: string
  createdBy: IUser
  _id: string
}

export interface IRootState {
  projects: IProject[]
  activeProject: IProjectState | null
  authentication: null | {
    user: IUser
  }
  isFetching: boolean
  error: any
}

const dummyUser = {
  name: 'mika',
  password: '$2b$12$T9NW2RCbymWuRgNsM7CS4.yav9u7HL0KESGN9tyy1h90alMr3B3fa',
  profilePicture: '/mika',
  roles: [],
  surname: 'surMika',
  username: 'MikolasCage',
  _id: '61ac087a5ea297b9314cf278',
}

export const initialState: IRootState = {
  projects: [],
  activeProject: null,
  authentication: {
    user: dummyUser,
  },
  isFetching: false,
  error: null,
}

function projectReducer(
  state: IRootState = initialState,
  action: { type: string; payload: any }
) {
  const stateClone: IRootState = { ...state }

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
        activeProject: { ...state.activeProject, ...action.payload },
      }
    case projectActionTypes.UPDATE_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      }
    case projectActionTypes.CREATE_NEW_BOARD:
      if (stateClone.activeProject?.boards) {
        stateClone.activeProject.boards = [
          ...stateClone.activeProject.boards,
          action.payload,
        ]
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
