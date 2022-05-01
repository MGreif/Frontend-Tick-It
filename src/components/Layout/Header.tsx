import React, { useState } from 'react'
import { Dropdown, Layout } from 'antd'
import { useSelector } from 'react-redux'
import classes from './Header.module.css'
import { DownOutlined } from '@ant-design/icons'
import Menu from 'antd/lib/menu'
import { useFetchProjectData } from '../../hooks/projects/useFetchProjectData'
import { IProjectState, IRootState } from '../../redux/project.reducer'

const { Header: AntdHeader } = Layout

interface IMenu {
  projects: IProjectState[]
  onClick: any
  selectedProject: IProjectState | null
}

const HeaderMenu = ({ projects, onClick, selectedProject }: IMenu) => {
  return (
    <Menu>
      {projects
        .filter(
          (projectEntry: IProjectState) =>
            projectEntry._id !== selectedProject?._id
        )
        .map((project) => (
          <Menu.Item key={project._id as string}>
            <button className={classes.button} onClick={() => onClick(project)}>
              {project.name}
            </button>
          </Menu.Item>
        ))}
    </Menu>
  )
}

const Header = () => {
  const activeProjectName: any = useSelector<IRootState>(
    (state) => state.activeProject?.name
  )
  const projects: any = useSelector<IRootState>((state) => state.projects)
  const [project, setProject] = useState<IProjectState | null>(null)
  useFetchProjectData(project?._id)

  const handleClick = (project: IProjectState) => {
    console.log('set project', project)
    setProject(project)
  }

  return (
    <AntdHeader>
      <div className={classes.dropdownContainer}>
        <Dropdown
          overlay={
            <HeaderMenu
              projects={projects}
              onClick={handleClick}
              selectedProject={project}
            />
          }
          className={classes.projectDropdown}
        >
          <button
            className={classes.button}
            onClick={(e) => e.preventDefault()}
          >
            {activeProjectName || 'Projects'} <DownOutlined />
          </button>
        </Dropdown>
      </div>
    </AntdHeader>
  )
}

export default Header
