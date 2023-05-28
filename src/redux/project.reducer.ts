import { TProjectDTO } from "../types/Project.types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { TReduxStore } from "./store"
import {
    useLazyGetProjectDataQuery,
} from "../Api/projects"

export interface IProjectRootState {
    activeProjectId: string | null
}

export const dummyUser = {
    name: "mika",
    password: "$2b$12$T9NW2RCbymWuRgNsM7CS4.yav9u7HL0KESGN9tyy1h90alMr3B3fa",
    keycloakId: "7eb440ae-fb2e-48d5-bb56-96d5fbc567fd",
    profilePicture: "/mika",
    roles: [],
    surname: "surMika",
    username: "MikolasCage",
    _id: "61ac087a5ea297b9314cf278",
}

export const initialState: IProjectRootState = {
    activeProjectId: null,
}

const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
        change(state, action: PayloadAction<string>) {
            console.log(action, "awdawdawdawd")
            state.activeProjectId = action.payload
        },
    },
})

export const useProjectSlice = () => {
    const activeProjectId = useSelector<TReduxStore, string>(
        (state) => state.project.activeProjectId as string
    )
    const [trigger, result] = useLazyGetProjectDataQuery()

    useEffect(() => {
        if (activeProjectId) {
            trigger(activeProjectId, true)
        }
    }, [activeProjectId])

    useEffect(() => {
        console.log(result.data)
    }, [result])

    const dispatch = useDispatch()
    return {
        activeProject: result.data,
        activeProjectId,
        changeProject: (id: TProjectDTO["_id"]) =>
            dispatch(projectSlice.actions.change(id)),
    }
}

export const { change } = projectSlice.actions
export const reducer = projectSlice.reducer
