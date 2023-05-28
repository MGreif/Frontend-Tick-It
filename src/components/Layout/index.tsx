import React, { MemoExoticComponent, ReactElement, ReactNode } from "react"
import { Route, Link, Routes, redirect, useNavigate } from "react-router-dom"
import { Layout as AntdLayout, Menu } from "antd"
import { getMenuItemBasedOnUrl } from "../../libs/getMenuItemBasedOnUrl"
import { ROUTE_CONFIGURATION } from "../../constants/appConfiguration"
import { useFetchProjectsByUserId } from "../../hooks/projects/useFetchProjectsByUserId"
import Header from "./Header"
import CreateTicket from "../../pages/tickets/CreateTicket"
import CreateLabel from "../../pages/labels/CreateLabel"
import TicketDetailPage from "../../pages/tickets/DetailPage"
import EditTicket from "../../pages/tickets/EditTicket"
import { CustomErrorBoundary } from "../ErrorBoundary"
import { buildRouterLink } from "../../libs/linkBuilder"
import { Dashboard } from "../../pages/projects/Dashboard"
import { useProjectSlice } from "../../redux/project.reducer"

const { Content, Footer, Sider } = AntdLayout

const DashboardCheck = ({ children }: any) => {
    const { activeProjectId } = useProjectSlice()
    const navigate = useNavigate()
    console.log("activeProjectId", activeProjectId)
    if (!activeProjectId) {
        navigate(buildRouterLink("/projects"))
        return <></>
    }

    return <>{children}</>
}

const Router = () => {
    return (
        <Content style={{ margin: "16px" }}>
            <Routes>
                <Route
                    path={buildRouterLink("/projects")}
                    element={<Dashboard />}
                />
                {ROUTE_CONFIGURATION.map((config) => (
                    <Route
                        key={config.title}
                        path={buildRouterLink("/" + config.path)}
                        element={<config.component />}
                    />
                ))}
                <Route
                    path={buildRouterLink("/tickets/create")}
                    element={<CreateTicket />}
                />
                <Route
                    path={buildRouterLink("/tickets/edit/:ticketId")}
                    element={<EditTicket />}
                />
                <Route
                    path={buildRouterLink("/tickets/:ticketId")}
                    element={<TicketDetailPage />}
                />
                <Route
                    path={buildRouterLink("/labels/create")}
                    element={<CreateLabel />}
                />
                <Route
                    path={buildRouterLink("*")}
                    element={<span>404 - Path not found</span>}
                />
            </Routes>
        </Content>
    )
}

const Redirector = ({ children }: { children: ReactElement }) => {
    const activeProject = useProjectSlice().activeProject
    const navigate = useNavigate()
    if (!activeProject) {
        navigate("/projects")
        return null
    }
    return children
}

function Layout() {
    return (
        <AntdLayout style={{ minHeight: "100vh" }}>
            <Sider collapsible>
                <Menu
                    theme="dark"
                    defaultSelectedKeys={[getMenuItemBasedOnUrl()]}
                    mode="inline"
                >
                    {ROUTE_CONFIGURATION.map((config, index) => (
                        <Menu.Item key={`${index + 1}`} icon={<config.icon />}>
                            <Link
                                title={config.title}
                                to={buildRouterLink("/" + config.path)}
                            >
                                {config.title}
                            </Link>
                        </Menu.Item>
                    ))}
                </Menu>
            </Sider>
            <AntdLayout className="site-layout">
                <Header />
                <CustomErrorBoundary>
                    <Router />
                </CustomErrorBoundary>
                <Footer style={{ textAlign: "center" }}>
                    Tick It - Created By @Mika Greif
                </Footer>
            </AntdLayout>
        </AntdLayout>
    )
}

export default Layout
