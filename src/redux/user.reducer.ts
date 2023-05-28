import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { TReduxStore } from "./store"
import { Auth } from "../Auth/Auth"
import { useLazyGetUserQuery } from "../Api/users"

export type TUser = {
    _id: string,
    name: string,
    surname: string,
    username: string,
    keycloakId: string,
    password: string,
    profilePicture: string,
    roles: string[]
}

export interface IUserState {
    loggedInUser: TUser | null,
}

export const initialState: IUserState = {
    loggedInUser: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        change(state, action: PayloadAction<TUser>) {
            state.loggedInUser = action.payload
        },
    },
})

export const useUserSlice = () => {
    const loggedInUser = useSelector<TReduxStore, TUser | null>(
        (state) => state.user.loggedInUser
    )
    const [trigger, result] = useLazyGetUserQuery()
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(Auth.kc)
        if (Auth.kc.tokenParsed?.sub) {
            trigger(Auth.kc.tokenParsed?.sub, true)
        }
    }, [])

    useEffect(() => {
        console.log(result.data)
        if (result.data) dispatch(userSlice.actions.change(result.data))
    }, [result])

    return {
        loggedInUser,
        changeUser: (user: TUser) =>
            dispatch(userSlice.actions.change(user)),
    }
}

export const { change } = userSlice.actions
export const userReducer = userSlice.reducer
