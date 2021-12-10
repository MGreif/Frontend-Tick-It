import React from 'react'
import { useSelector } from 'react-redux'
import { IRootState } from '../../redux/project.reducer'
import { Button, Dropdown, Menu } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import classes from './index.module.css'

interface IBoardSelectionProps {
  setBoard: any,
  board: any
}

const BoardSelection = (props: IBoardSelectionProps) => {
  const boards: any = useSelector<IRootState>(state => state.activeProject?.boards) || []
  const activeProject = useSelector<IRootState>(state => state.activeProject)

  const DropdownMenu = () => {
    return (
      <Menu>
        {
          boards
          .filter((boardEntry: any) => boardEntry._id !== props.board?._id)
          .map((boardItem: any) => (
            <Menu.Item key={boardItem.name}>
              <Button onClick={() => props.setBoard(boardItem)} className={classes.menuButton}>
                {boardItem.name}
              </Button>
            </Menu.Item>
          ))
        }
        <Menu.Item key="new-project">
          <Button onClick={() => console.log('new-project')} className={classes.menuButton}>
            Add project <PlusOutlined />
          </Button>
        </Menu.Item>
      </Menu>
    )
  }

  if (!activeProject) return null

  return (
    <Dropdown overlay={DropdownMenu} placement="bottomLeft" arrow>
      <Button>
        Board Auswahl
      </Button>
    </Dropdown>
  )

}

export default BoardSelection