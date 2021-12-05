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
    isFetching: Boolean,
    error: any
}

export interface IRootState {
  rootState: IProjectState
}

const initialState: IRootState = {
  rootState: {
    boards: [],
    labels: [],
    members: [],
    tickets: [],
    isFetching: false,
    error: null
  }
}

function projectReducer(state: IRootState = initialState, action: { type: String, payload: any }) {
    switch (action.type) {
      case projectActionTypes.FETCH_REQUESTED:
        return { ...state, isFetching: true }
      case projectActionTypes.FETCH_SUCCEEDED:
        return { ...state, isFetching: false, ...action.payload }
      case projectActionTypes.FETCH_FAILED:
        return { ...state, isFetching: false, error: action.payload }
      default:
        return state
    }
  }

export { projectReducer }