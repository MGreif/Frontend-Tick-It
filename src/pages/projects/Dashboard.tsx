import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, Card, Row, Col } from 'antd'
import { useFetchProjectData } from '../../hooks/projects/useFetchProjectData'
import { IRootState } from '../../redux/project.reducer'
import { IProject } from '../../types/Project.types'
import classes from './Dashboard.module.css'

export const Dashboard: React.FC<any> = () => {
  const projects: IProject[] = useSelector<IRootState, IProject[]>(
    (state) => state.projects
  )
  const [project, setProject] = useState<IProject | null>(null)

  useFetchProjectData(project?._id)

  const handleClick = (project: IProject) => {
    console.log('set project', project)
    setProject(project)
  }

  return (
    <Row>
      {projects.map((projectEntry) => (
        <Col key={projectEntry._id}>
          <Card
            className={classes.card}
            title={projectEntry.name}
            actions={[
              <Button
                type={project?._id === projectEntry._id ? 'primary' : 'dashed'}
                onClick={() => handleClick(projectEntry)}
              >
                {project?._id === projectEntry._id ? 'Selected!' : 'Select'}
              </Button>,
            ]}
          >
            <span>{projectEntry.description}</span>
          </Card>
        </Col>
      ))}
    </Row>
  )
}
