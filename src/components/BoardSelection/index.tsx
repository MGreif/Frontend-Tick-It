import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { IRootState } from '../../redux/project.reducer'
import { Button, Dropdown, Input, Menu } from 'antd'
import classes from './index.module.css'
import { useCreateNewBoard } from '../../redux/hooks'

interface IBoardSelectionProps {
  setBoard: any,
  board: any
}

const AddBoard = () => {
  const [boardName, setBoardName] = useState("")
  const createNewBoard = useCreateNewBoard()

  const handleAddClick = () => {
    if (boardName !== "") {
      createNewBoard(boardName)
    }
  }

  return (
  <Input.Group compact>
      <Input style={{ width: 'calc(100% - 56px)' }} defaultValue="Sample Board" onChange={(e) => setBoardName(e.target.value)} />
      <Button type="primary" onClick={handleAddClick}>Add</Button>
  </Input.Group>
  )
}

const BoardSelection = (props: IBoardSelectionProps) => {
  const activeProject: any = useSelector<IRootState>(state => state.activeProject)
  console.log("render selection")

  const DropdownMenu = () => {
  const boards: any = useSelector<IRootState>(state => state.activeProject?.boards)
    console.log("render Menu")
    return (
      <Menu className={classes.menu}>
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
          <AddBoard />
        </Menu.Item>
      </Menu>
    )
  }

  if (!activeProject) return null

  return (
    <Dropdown
      overlay={() => <DropdownMenu />}
      placement="bottomLeft"
      arrow
    >
      <Button>
        {props.board ? props.board.name : "Board Auswahl"}
      </Button>
    </Dropdown>
  )

}

export default BoardSelection