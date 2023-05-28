import { createStore } from "redux"
import { IProjectRootState, reducer } from "./project.reducer"
import rootReducer from "./rootReducer"
import { compose, configureStore } from "@reduxjs/toolkit"
import { projectApi } from "../Api/projects"
import { setupListeners } from "@reduxjs/toolkit/query"
import { TProjectDTO } from "../types/Project.types"
import { emptySplitApi } from "../Api/emptySplitApi"

const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// @ts-ignore
const store = configureStore({
    reducer: {
        [emptySplitApi.reducerPath]: emptySplitApi.reducer,
        project: reducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(emptySplitApi.middleware),
})

export type TReduxStore = {
    project: IProjectRootState
}

setupListeners(store.dispatch)

export { store }
