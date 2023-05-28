import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Col, Row } from "antd"
import { IBoard } from "../../types/Board.types"
import classes from "./Dashboard.module.css"
import { useProjectSlice } from "../../redux/project.reducer"
import BoardListActionBar from "../../components/BoardListActionBar"
import SubBoardList from "../../components/SubBoardList"
import { useNavigate } from "react-router-dom"

const BoardDashboard = () => {
    const { activeProject } = useProjectSlice()

    const [board, setBoard] = useState<IBoard | null>(
        activeProject?.boards[0] || null
    )

    useEffect(() => {
        const updatedBoard: IBoard | undefined = activeProject?.boards.find(
            (boardEntry) => boardEntry._id === board?._id
        )
        if (updatedBoard) {
            setBoard(updatedBoard)
        } else {
            setBoard(null)
        }
    }, [activeProject, board?._id])

    return (
        <div className={classes.listContainer}>
            <Row gutter={[16, 16]} className={classes.listRow}>
                <Col span={1}></Col>
                <Col span={22}>
                    <BoardListActionBar board={board} setBoard={setBoard} />
                </Col>
                <Col span={1}></Col>
            </Row>
            <Row gutter={[16, 16]} className={classes.listRow}>
                <Col span={1}></Col>
                <Col span={22}>
                    <SubBoardList board={board} />
                </Col>
                <Col span={1}></Col>
            </Row>
        </div>
    )
}

export default React.memo(BoardDashboard)
