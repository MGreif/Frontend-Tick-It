import { Button } from "antd"
import React from "react"
import { Link } from "react-router-dom"
import classes from "./index.module.css"

const ActionBar = () => {
    return (
        <div className={classes.container}>
            <Link type="primary" to="/labels/create">
                <span>New Label</span>
            </Link>
            <Button>Test</Button>
        </div>
    )
}

export default ActionBar
