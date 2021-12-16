import * as labelGateway from '../../gateway/labels'

export const useCreateNewLabel = () => {
  return async (labelData) => {
    try {
      await labelGateway.createNewLabel(labelData)
    } catch (error) {
      console.error(error)
    }
  }
}

