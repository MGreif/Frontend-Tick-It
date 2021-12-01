import { Breadcrumb } from "antd"
import React from "react"

export default () => {
    return (
        <React.Fragment>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
            </Breadcrumb>
            <span>Users</span>
        </React.Fragment>
    )
}