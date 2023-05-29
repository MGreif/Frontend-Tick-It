import { Button } from "antd"
import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { buildRouterLink } from "../../libs/linkBuilder"
import classes from "./index.module.css"

const ActionBar = () => {
    return (
        <div className={classes.container}>
            <Link type="primary" to="/tickets/create">
                <span>New Ticket</span>
            </Link>
            <Button>Test</Button>
        </div>
    )
}

export default ActionBar
