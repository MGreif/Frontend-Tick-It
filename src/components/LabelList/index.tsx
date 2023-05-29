import React from "react"
import { List } from "antd"
import classes from "./index.module.css"
import { useGetProject } from "../../redux/project.reducer"
import { ILabel } from "../../pages/labels/types"
import LabelListItem from "./LabelListItem"

const LabelList = () => {
    const { activeProject } = useGetProject()
    const labels = activeProject?.labels || []

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
