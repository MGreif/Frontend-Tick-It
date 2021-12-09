import { Dropdown, Menu, Button } from 'antd'
import React, {useState } from 'react'
import SubBoard from '../../components/SubBoard'
import { IBoard } from './types'
import classes from './BoardDashboard.module.css'
import { useFetchProjectData } from '../../redux/hooks'
import { useDispatch, useSelector } from 'react-redux'
import { IProjectState, IRootState } from '../../redux/project.reducer'

const BoardDashboard = () => {
  const projects : any = useSelector<IRootState>((state) => state.projects) || []
  const boards : any = useSelector<IRootState>((state) => state.activeProject?.boards) || []
  const [board, setBoard] = useState<IBoard | null>(null)
  const [project, setProject] = useState<IProjectState | null>(null)
  useFetchProjectData(project?._id)
  
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