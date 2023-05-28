import React from "react"
import { List } from "antd"
import classes from "./index.module.css"
import { useSelector } from "react-redux"
import { IProjectRootState, useProjectSlice } from "../../redux/project.reducer"
import { ILabel } from "../../pages/labels/types"
import LabelListItem from "./LabelListItem"
import { useGetProjectDataQuery } from "../../Api/projects"

const LabelList = () => {
    const { activeProjectId } = useProjectSlice()
    const { data } = useGetProjectDataQuery(activeProjectId)
    const labels = data?.labels || []

    return (
        <List
            className={classes.list}
            bordered
            itemLayout="horizontal"
            dataSource={labels || []}
            header={<b>Labels</b>}
            renderItem={(label: ILabel) => (
                <List.Item className={classes.listItem}>
                    <LabelListItem labelData={label} />
                </List.Item>
            )}
        />
    )
}

export default LabelList
