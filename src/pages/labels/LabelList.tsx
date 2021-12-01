import { Breadcrumb } from "antd"
import React from "react"

export default () => {
    return (
        <React.Fragment>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Labels</Breadcrumb.Item>
            </Breadcrumb>
            <span>Labels</span>
        </React.Fragment>
    )
}