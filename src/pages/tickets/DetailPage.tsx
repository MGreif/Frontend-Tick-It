import { Col, Row } from "antd"
import React, { useLayoutEffect } from "react"
import { useParams, useLocation } from "react-router"
import TicketDetails from "../../components/TicketDetails"
import { useGetDetailedTicket } from "../../hooks/tickets/useGetDetailedTicket"
import classes from "./DetailPage.module.css"
import {
    useGetDetailedTicketQuery,
    useUpdateTicketMutation,
} from "../../Api/tickets"

const DetailPage = () => {
    const location = useLocation()
    const state: any = location.state
    const { ticketId }: any = useParams()
    const { data: ticket } = useGetDetailedTicketQuery(ticketId)

    if (!ticket) return <div>No ticket</div>

    return (
        <div>
            <Row gutter={[16, 16]} className={classes.listRow}>
                <Col span={3}></Col>
                <Col span={18}>
                    <TicketDetails ticketData={ticket} />
                </Col>
                <Col span={3}></Col>
            </Row>
        </div>
    )
}

export default DetailPage
