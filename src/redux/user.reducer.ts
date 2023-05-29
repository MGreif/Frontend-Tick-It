import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"
import { TReduxStore } from "./store"
import { useEffect } from "react"

export type TUser = {
    _id: string,
    keycloakId: string,
}

export interface IUserState {
    loggedInUser: TUser | null,
}

export const initialState: IUserState = {
    loggedInUser: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        change(state, action: PayloadAction<Partial<IUserState>>) {
            if (action.payload.loggedInUser) state.loggedInUser = action.payload.loggedInUser
        },
    },
})

export const useUserSlice = () => {
    const { loggedInUser } = useSelector<TReduxStore, IUserState>(
        (state) => state.user
    )
    const dispatch = useDispatch()

    return {
        loggedInUser,
        changeUser: (user: TUser) =>
            dispatch(userSlice.actions.change({loggedInUser: user})),
    }
}

export const { change } = userSlice.actions
export const userReducer = userSlice.reducer
