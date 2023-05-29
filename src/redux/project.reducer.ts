import { IProjectSimpleDTO, TProjectDTO } from "../types/Project.types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { TReduxStore } from "./store"
import {
    useGetProjectDataQuery,
    useLazyGetProjectDataQuery, useLazyGetProjectsByUserQuery,
} from "../Api/projects"

export interface IProjectRootState {
    activeProjectId: string | null
    activeProject: TProjectDTO | null
    projects: IProjectSimpleDTO[]
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
    activeProject: null,
    projects: []
}

const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
        change(state, action: PayloadAction<string>) {
            state.activeProjectId = action.payload
        },
        updateActiveProject(state, action: PayloadAction<TProjectDTO>) {
            state.activeProject = action.payload
        },
        updateProjects(state, action: PayloadAction<IProjectSimpleDTO[]>) {
            state.projects = action.payload
        }
    },
})


export const useGetProject = () => {
    const {activeProjectId} = useProjectSlice()
    const [fetch,{data: activeProject}] = useLazyGetProjectDataQuery()

    useEffect(() => {
        console.log("change project", activeProjectId)
        activeProjectId && fetch(activeProjectId)
    }, [activeProjectId])

    return {
        activeProject,
        activeProjectId,
        refetch: (id: string) => id && fetch(id)
    }
}


export const useProjectSlice = () => {
    const {activeProjectId, projects} = useSelector<TReduxStore, IProjectRootState>(
        (state) => state.project
    )

    const dispatch = useDispatch()
    return {
        activeProjectId,
        projects,
        changeProject: (id: TProjectDTO["_id"]) =>
            dispatch(projectSlice.actions.change(id)),
    }
}

export const { change } = projectSlice.actions
export const reducer = projectSlice.reducer
