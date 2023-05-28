import React from "react"
import { Breadcrumb, Col, Row } from "antd"
import classes from "./List.module.css"
import TicketForm from "../../components/TicketForm"
import { Link, redirect, useNavigate } from "react-router-dom"
import { buildRouterLink } from "../../libs/linkBuilder"
import { useCreateTicketMutation } from "../../Api/tickets"

const CreateTicket = () => {
    const [trigger] = useCreateTicketMutation()
    const navigate = useNavigate()
    const formButtons = [
        {
            onClick: (data: any) => {
                trigger(data).then(() => navigate(buildRouterLink("/tickets")))
            },
            label: "Submit",
        },
    ]
    return (
        <div className={classes.listContainer}>
            <Row gutter={[16, 16]} className={classes.listRow}>
                <Col span={5}></Col>
                <Col span={14}>
                    <TicketForm actionButtons={formButtons} />
                </Col>
                <Col span={5}></Col>
            </Row>
            <Row gutter={[16, 16]} className={classes.listRow}>
                <Col span={5}></Col>
                <Col span={14}></Col>
                <Col span={5}></Col>
            </Row>
        </div>
    )
}

export default CreateTicket
