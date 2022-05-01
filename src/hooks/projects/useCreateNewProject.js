import * as projectGateway from '../../gateway/projects'

export const useCreateNewProject = () => {
  return async (projectData) => {
    try {
      await projectGateway.createProject(projectData)
    } catch (error) {
      console.error(error)
    }
  }
}
