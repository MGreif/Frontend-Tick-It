import superagent from 'superagent'
import { ILabel } from '../pages/labels/types'

const baseUrl = `${process.env.REACT_APP_SERVICE_HOST}:${process.env.REACT_APP_SERVICE_PORT}`

const createNewLabel: any = (labelData: ILabel) => {

  const url = baseUrl + '/labels'
  return superagent
    .post(url)
    .send(labelData)
}

const deleteLabel: any = (labelId: string) => {

  if (!labelId) throw Error("no LabelId is given")

  const url = baseUrl + '/labels/' + labelId
  return superagent
    .delete(url)
}


export { createNewLabel, deleteLabel }