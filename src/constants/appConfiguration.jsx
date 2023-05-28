import UserList from "../pages/users/UserList"
import LabelList from "../pages/labels/List"
import BoardDashboard from "../pages/boards/Dashboard"
import TicketList from "../pages/tickets/List"
import React from "react"

const ROUTE_CONFIGURATION = [
    {
        title: "Boards",
        path: "boards",
        component: BoardDashboard,
        icon: () => <span>icon</span>,
    },
    {
        title: "Tickets",
        path: "tickets",
        component: TicketList,
        icon: () => <span>icon</span>,
    },
    {
        title: "Labels",
        path: "labels",
        component: LabelList,
        icon: () => <span>icon</span>,
    },
    {
        title: "Users",
        path: "users",
        component: UserList,
        icon: () => <span>icon</span>,
    },
    {
        title: "Settings",
        path: "settings",
        component: UserList,
        icon: () => <span>icon</span>,
    },
]

export { ROUTE_CONFIGURATION }
