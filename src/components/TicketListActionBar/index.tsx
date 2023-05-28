import { Button } from "antd"
import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { buildRouterLink } from "../../libs/linkBuilder"
import classes from "./index.module.css"

const ActionBar = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/tickets/create", { replace: true })
    }
    return (
        <div className={classes.container}>
            <Button type="primary" href="/tickets/create" onClick={handleClick}>
                <span>New Ticket</span>
            </Button>
            <Button>Test</Button>
        </div>
    )
}

export default ActionBar
