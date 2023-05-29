import { List } from "antd"
import TicketListItem from "./TicketListItem"
import { ITicket } from "../../pages/tickets/types"
import { useGetProject } from "../../redux/project.reducer"
import classes from "./index.module.css"

const TicketList = () => {
    const { activeProject } = useGetProject()
    return (
        <List
            className={classes.list}
            bordered
            itemLayout="horizontal"
            dataSource={activeProject?.tickets || []}
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
