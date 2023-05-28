import React, { useState } from "react"
import { useSelector } from "react-redux"
import { IProjectRootState, useProjectSlice } from "../../redux/project.reducer"
import { Button, Dropdown, Input, Menu } from "antd"
import classes from "./index.module.css"
import { useCreateNewBoard } from "../../hooks/useCreateNewBoard"
import { CheckCircleOutlined } from "@ant-design/icons"
import GenericModal from "../GenericModal"
import { useCreateBoardMutation } from "../../Api/boards"

interface IBoardSelectionProps {
    setBoard: any
    board: any
}

const AddBoard = () => {
    const [boardName, setBoardName] = useState("")
    const { activeProject } = useProjectSlice()

    const [trigger] = useCreateBoardMutation()
    const handleAddClick = () => {
        if (boardName !== "") {
            trigger({
                name: boardName,
                project: activeProject?._id,
                subBoards: [],
            })
        }
    }

    return (
        <span onClick={(e) => e.stopPropagation()}>
            <Input.Group compact>
                <Input
                    style={{ width: "calc(100% - 56px)" }}
                    defaultValue="Sample Board"
                    onChange={(e) => setBoardName(e.target.value)}
                />
                <Button type="primary" onClick={handleAddClick}>
                    Add
                </Button>
            </Input.Group>
        </span>
    )
}

const BoardSelection = (props: IBoardSelectionProps) => {
    const { activeProject } = useProjectSlice()

    const DropdownMenu = () => {
        const boards = activeProject?.boards || []
        return (
            <Menu className={classes.menu}>
                {boards.map((boardItem: any) => (
                    <Menu.Item
                        key={boardItem.name}
                        onClick={() => props.setBoard(boardItem)}
                    >
                        <span>
                            {boardItem.name}{" "}
                            {boardItem._id === props.board?._id && (
                                <CheckCircleOutlined color="green" />
                            )}
                        </span>
                    </Menu.Item>
                ))}
                <Menu.Item
                    key="new-project"
                    className={classes.newProjectOption}
                >
                    <AddBoard />
                </Menu.Item>
            </Menu>
        )
    }

    if (!activeProject) return null

    return (
        <Dropdown overlay={() => <DropdownMenu />} placement="bottomLeft" arrow>
            <Button>
                {props.board ? `Board - ${props.board.name}` : "Board Auswahl"}
            </Button>
        </Dropdown>
    )
}

export default BoardSelection
