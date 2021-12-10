import { CREATE_NEW_SUBBOARD } from "./subBoard.actionTypes"

export const createNewSubBoard = (boards) => {
  return {
    type: CREATE_NEW_SUBBOARD,
    payload: { boards }
  }
}