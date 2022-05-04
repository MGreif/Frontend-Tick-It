import superagent from 'superagent'
import { IBoard } from '../types/Board.types'
import { BASE_URL } from './constants'

const createNewBoard: any = (boardData: IBoard) => {
  const url = BASE_URL + '/boards'
  return superagent.post(url).send(boardData)
}

export { createNewBoard }
