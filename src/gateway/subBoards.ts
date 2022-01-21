import superagent from 'superagent'
import { ISubBoard } from '../components/types'

const baseUrl = `${process.env.REACT_APP_SERVICE_HOST}:${process.env.REACT_APP_SERVICE_PORT}`

const createNewSubBoard: any = (subBoardData: ISubBoard, boardId: string) => {
  if (!subBoardData || !boardId) return

  const url = baseUrl + '/subBoards'
  return superagent.post(url).send({ ...subBoardData, boardId })
}

const deleteSubBoard: any = (subBoardId: number) => {
  if (!subBoardId) return
  const url = baseUrl + `/subBoards/${subBoardId}`
  return superagent.delete(url)
}

export { createNewSubBoard, deleteSubBoard }
