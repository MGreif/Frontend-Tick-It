import { Dropdown, Menu, Button } from 'antd'
import React, { useEffect, useState } from 'react'
import SubBoard from '../../components/SubBoard'
import { IBoard } from './types'
import classes from './BoardDashboard.module.css'
import { useFetchProjectsByUserId } from '../../redux/hooks'
import { useSelector } from 'react-redux'
import { IProjectState } from '../../redux/project.reducer'

const BoardDashboard = () => {
  const fetchProjects = useFetchProjectsByUserId()
  const projects : any = useSelector<any>((state) => state.rootState.projects) || []
  const boards : any = useSelector<any>((state) => state.rootState.boards) || []
  const [board, setBoard] = useState<IBoard | null>(null)
  const [project, setProject] = useState<IProjectState | null>(null)


  useEffect(() => {
    fetchProjects()
  }, [])

  console.log('projects', projects)

  const DropdownMenu = () => {
    return (
        <Menu>
          {
            boards.map((boardItem: any) => (
              <Menu.Item key={boardItem.name}>
                <Button onClick={() => setBoard(boardItem)} > 
                  {boardItem.name}
                </Button>
              </Menu.Item>
            ))
          }
        </Menu>
    )
  }

  const DropdownMenuProjects = () => {
    return (
        <Menu>
          {
            projects.map((project: any) => (
              <Menu.Item key={project.name}>
                <Button onClick={() => setProject(project)} > 
                  {project.name}
                </Button>
              </Menu.Item>
            ))
          }
        </Menu>
    )
  }

  return (
    <React.Fragment>
      <div className={classes['board-selection']}>
        <Dropdown overlay={DropdownMenuProjects} placement="bottomLeft" arrow>
          <Button>
            Project Auswahl
          </Button>
        </Dropdown>
        <Dropdown overlay={DropdownMenu} placement="bottomLeft" arrow>
          <Button>
            Board Auswahl
          </Button>
        </Dropdown>
      </div>
      <div className={classes['boards-container']}>
        {
          board && board.subBoards.map(subBoard => <SubBoard subBoardData={subBoard} />)
        }
      </div>
    </React.Fragment>
  )
}

export default React.memo(BoardDashboard)