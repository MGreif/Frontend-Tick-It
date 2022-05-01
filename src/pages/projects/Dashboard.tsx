import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, Card, Row, Col } from 'antd'
import { useFetchProjectData } from '../../hooks/projects/useFetchProjectData'
import { IProjectState, IRootState } from '../../redux/project.reducer'
import GenericModal from '../../components/GenericModal'
import { IProject } from '../../types/Project.types'
import classes from './Dashboard.module.css'
import ProjectForm from '../../components/ProjectForm'
import { IUser } from '../users/types'
import { useCreateNewProject } from '../../hooks/projects/useCreateNewProject'

export const Dashboard: React.FC<any> = () => {
  const projects: IProject[] = useSelector<IRootState, IProject[]>(
    (state) => state.projects
  )

  const activeProject = useSelector<IRootState, IProjectState | null>(
    (state) => state?.activeProject
  )
  const [project, setProject] = useState<IProject | null>(null)

  const user = useSelector<IRootState, IUser | undefined>(
    (state) => state.authentication?.user
  )
  useFetchProjectData(project?._id)
  const createProject = useCreateNewProject()
  const handleClick = (project: IProject) => {
    console.log('set project', project)
    setProject(project)
  }

  return (
    <>
      <div>
        <GenericModal
          title={'Create Project'}
          content={ProjectForm}
          buttonLabel="Create Project"
          actions={[
            {
              label: 'Create',
              function: (data: any) =>
                createProject({
                  ...data,
                  members: [user?._id],
                  createdBy: user?._id,
                }),
            },
          ]}
        />
      </div>
      <Row>
        {projects.map((projectEntry) => (
          <Col key={projectEntry._id}>
            <Card
              className={classes.card}
              title={projectEntry.name}
              actions={[
                <Button
                  type={
                    activeProject?._id === projectEntry._id
                      ? 'primary'
                      : 'dashed'
                  }
                  onClick={() => handleClick(projectEntry)}
                >
                  {activeProject?._id === projectEntry._id
                    ? 'Selected!'
                    : 'Select'}
                </Button>,
              ]}
            >
              <span>{projectEntry.description}</span>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}
