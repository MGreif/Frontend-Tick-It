import superagent from 'superagent'
import { ISubBoard } from '../components/types'
import { BASE_URL } from './constants'

const createNewSubBoard: any = (subBoardData: ISubBoard, boardId: string) => {
  if (!subBoardData || !boardId) return

  const url = BASE_URL + '/subBoards'
  return superagent.post(url).send({ ...subBoardData, boardId })
}

const deleteSubBoard: any = (subBoardId: number) => {
  if (!subBoardId) return
  const url = BASE_URL + `/subBoards/${subBoardId}`
  return superagent.delete(url)
}

export { createNewSubBoard, deleteSubBoard }
