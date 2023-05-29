import React, { useState } from "react"
import { IProjectRootState, useGetProject, useProjectSlice } from "../../redux/project.reducer"
import { Button, Dropdown, Input, Menu } from "antd"
import classesModule from "./index.module.css"
import { CheckCircleOutlined } from "@ant-design/icons"
import { useCreateBoardMutation } from "../../Api/boards"
import { createStyles } from "@mantine/core"

interface IBoardSelectionProps {
    setBoard: any
    board: any
}

const useStyles = createStyles({
    input: {
        width: "220px !important",
        borderTopRightRadius: "0px !important",
        borderBottomRightRadius: "0px !important"
    },
    button: {
        borderTopLeftRadius: "0px !important",
        borderBottomLeftRadius: "0px !important"
    },
    addContainer: {
        width: "300px",
        display: "inline-block"
    },
    container: {
        display: "flex",
        gap: "1em",
        flexWrap: "nowrap"
    }
})

const AddBoard = () => {
    const [boardName, setBoardName] = useState("")
    const { activeProject } = useGetProject()
    const { classes } = useStyles()
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
        <span onClick={(e) => e.stopPropagation()} className={classes.addContainer}>
                <Input
                    defaultValue="Sample Board"
                    className={classes.input}
                    onChange={(e) => setBoardName(e.target.value)}
                />
                <Button type="primary" onClick={handleAddClick} className={classes.button}>
                    Add
                </Button>
        </span>
    )
}

const BoardSelection = (props: IBoardSelectionProps) => {
    const { activeProject } = useGetProject()
    const { classes } = useStyles()

    const DropdownMenu = () => {
        const boards = activeProject?.boards || []
        return (
            <Menu className={classesModule.menu}>
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
                    className={classesModule.newProjectOption}
                >
                    
                </Menu.Item>
            </Menu>
        )
    }

    if (!activeProject) return null
    const boards = activeProject?.boards || []

    const boardsJSX = boards.map((boardItem: any) => (
        <Button
            key={boardItem.name}
            onClick={() => props.setBoard(boardItem)}
            disabled={boardItem._id === props.board?._id}
        >
            <span>
                {boardItem.name}{" "}
                {boardItem._id === props.board?._id && (
                    <CheckCircleOutlined color="green" />
                )}
            </span>
        </Button>
    ))

    const newBoard = <AddBoard />

    return <div className={classes.container}>{[...boardsJSX, newBoard]}</div>
}

export default BoardSelection
