import React, { useEffect } from "react"
import { Breadcrumb, Col, Row, ButtonProps } from "antd"
import classes from "./List.module.css"
import TicketForm from "../../components/TicketForm"
import { Link, useParams, redirect, useNavigate } from "react-router-dom"
import { useUpdateTicket } from "../../hooks/tickets/useUpdateTicket"
import { useGetDetailedTicket } from "../../hooks/tickets/useGetDetailedTicket"
import { useDeleteTicket } from "../../hooks/tickets/useDeleteTicket"
import { buildRouterLink } from "../../libs/linkBuilder"
import {
    useDeleteTicketMutation,
    useGetDetailedTicketQuery,
    useUpdateTicketMutation,
} from "../../Api/tickets"

const EditTicket = () => {
    const { ticketId }: any = useParams()
    const { data: ticket } = useGetDetailedTicketQuery(ticketId)
    const [updateTicket] = useUpdateTicketMutation()
    const [deleteTicket] = useDeleteTicketMutation()
    const navigate = useNavigate()
    if (!ticket) return <span>Ticket with id not found ...</span>

    const formButtons = [
        {
            onClick: (data: any) => {
                updateTicket({ ticketId, ticketData: data }).then(() =>
                    navigate(buildRouterLink("/tickets/" + ticketId))
                )
            },
            label: "Save",
        },
        {
            onClick: () => {
                updateTicket({
                    ticketId,
                    ticketData: {
                        closed: !ticket.closed,
                    },
                }).then(() => navigate(buildRouterLink("/tickets/" + ticketId)))
            },
            label: ticket.closed ? "Re-open Ticket" : "Close Ticket",
            buttonProps: {
                style: { marginLeft: "1em" },
                type: "default" as ButtonProps["type"],
            },
        },
        {
            onClick: () => {
                deleteTicket(ticketId).then(() =>
                    navigate(buildRouterLink("/tickets"))
                )
            },
            label: "Delete Ticket ",
            buttonProps: {
                style: { marginLeft: "1em" },
                type: "default" as ButtonProps["type"],
            },
        },
    ]
    return (
        <div className={classes.listContainer}>
            <Row gutter={[16, 16]} className={classes.listRow}>
                <Col span={5}></Col>
                <Col span={14}>
                    <TicketForm
                        actionButtons={formButtons}
                        initialData={ticket}
                    />
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

export default EditTicket
