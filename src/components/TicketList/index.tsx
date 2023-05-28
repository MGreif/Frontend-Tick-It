import React from "react"
import { List } from "antd"
import TicketListItem from "./TicketListItem"
import { ITicket } from "../../pages/tickets/types"
import { useSelector } from "react-redux"
import { IProjectRootState, useProjectSlice } from "../../redux/project.reducer"
import classes from "./index.module.css"
import { useGetProjectDataQuery } from "../../Api/projects"

const TicketList = () => {
    const { activeProjectId } = useProjectSlice()
    const { data } = useGetProjectDataQuery(activeProjectId)
    return (
        <List
            className={classes.list}
            bordered
            itemLayout="horizontal"
            dataSource={data?.tickets || []}
            header={<b>Tickets</b>}
            renderItem={(ticket: ITicket) => (
                <List.Item className={classes.listItem}>
                    <TicketListItem ticketData={ticket} />
                </List.Item>
            )}
        />
    )
}

export default TicketList
