import React, { useEffect } from "react"
import { Col, Row } from "antd"
import classes from "./List.module.css"
import ActionBar from "../../components/LabelListActionBar"
import { useSelector } from "react-redux"
import { IProjectRootState, useProjectSlice } from "../../redux/project.reducer"
import { useFetchProjectData } from "../../hooks/projects/useFetchProjectData"
import LabelList from "../../components/LabelList/"
import { useNavigate } from "react-router-dom"

const List = () => {
    return (
        <div className={classes.listContainer}>
            <Row gutter={[16, 16]} className={classes.listRow}>
                <Col span={5}></Col>
                <Col span={14}>
                    <ActionBar />
                </Col>
                <Col span={5}></Col>
            </Row>
            <Row gutter={[16, 16]} className={classes.listRow}>
                <Col span={5}></Col>
                <Col span={14}>
                    <LabelList />
                </Col>
                <Col span={5}></Col>
            </Row>
        </div>
    )
}

export default List
