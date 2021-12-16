import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Col, Row } from 'antd'
import SubBoard from '../../components/SubBoardList/SubBoard'
import { IBoard } from '../../types/Board.types'
import classes from './Dashboard.module.css'
import { IProjectState, IRootState } from '../../redux/project.reducer'
import BoardListActionBar from '../../components/BoardListActionBar'
import SubBoardList from '../../components/SubBoardList'

const BoardDashboard = () => {
  const [board, setBoard] = useState<IBoard | null>(null)
  const activeProject: IProjectState | null = useSelector<IRootState, IProjectState | null>(state => state.activeProject)

  useEffect(() => {
    const updatedBoard: IBoard | undefined = activeProject?.boards.find(boardEntry => boardEntry._id === board?._id)
    if (updatedBoard) {
      setBoard(updatedBoard,)
    }
  }, [activeProject, board?._id])

  console.log("update", activeProject)
  if (!activeProject) return null

  return (
    <div className={classes.listContainer}>
      <Row gutter={[16, 16]} className={classes.listRow}>
        <Col span={3}></Col>
        <Col span={18}>
          <BoardListActionBar board={board} setBoard={setBoard} activeProject={activeProject}/>
        </Col>
        <Col span={3}></Col>
      </Row>
      <Row gutter={[16, 16]} className={classes.listRow}>
        <Col span={3}></Col>
        <Col span={18}>
            <SubBoardList board={board}/>
        </Col>
        <Col span={3}></Col>
      </Row>
    </div>
  )
}

export default React.memo(BoardDashboard)