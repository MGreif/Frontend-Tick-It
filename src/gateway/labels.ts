import superagent from 'superagent'
import { ILabel } from '../pages/labels/types'
import { BASE_URL } from './constants'

const createNewLabel: any = (labelData: ILabel) => {
  const url = BASE_URL + '/labels'
  return superagent.post(url).send(labelData)
}

const deleteLabel: any = (labelId: string) => {
  if (!labelId) throw Error('no LabelId is given')

  const url = BASE_URL + '/labels/' + labelId
  return superagent.delete(url)
}

export { createNewLabel, deleteLabel }
