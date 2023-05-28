import { MantineProvider, Text } from "@mantine/core"
import BoardDashboard from "./pages/boards/Dashboard"
import { BrowserRouter } from "react-router-dom"
import React from "react"
import Layout from "./components/Layout"
import { Dashboard } from "./pages/projects/Dashboard"
import { useUserSlice } from "./redux/user.reducer"

export default function App() {
    useUserSlice()
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        </MantineProvider>
    )
}
