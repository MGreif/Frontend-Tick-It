import { MantineProvider, Text } from "@mantine/core"
import { BrowserRouter } from "react-router-dom"
import React, { useEffect } from "react"
import Layout from "./components/Layout"
import { useUserSlice } from "./redux/user.reducer"
import { useLazyGetUserQuery } from "./Api/users"
import { Auth } from "./Auth/Auth"

export default function App() {
    const { changeUser } = useUserSlice()
    const [getUser] = useLazyGetUserQuery()
    


    useEffect(() => {
        if (Auth.getUserId()) {
            getUser(Auth.getUserId()).then((res) => {
                res.data && changeUser(res.data)
            })
        }
    }, [])

    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        </MantineProvider>
    )
}
