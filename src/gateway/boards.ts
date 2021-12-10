import superagent from 'superagent'
import { IBoard } from '../types/Board.types'

const baseUrl = `${process.env.REACT_APP_SERVICE_HOST}:${process.env.REACT_APP_SERVICE_PORT}`

const createNewBoard: any = (boardData: IBoard) => {

  const url = baseUrl + '/boards'
  return superagent
    .post(url)
    .send(boardData)
}

export { createNewBoard }