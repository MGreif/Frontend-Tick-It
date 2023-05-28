import { IProjectRootState, reducer } from "./project.reducer"
import { compose, configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { emptySplitApi } from "../Api/emptySplitApi"
import { IUserState, userReducer } from "./user.reducer"

const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// @ts-ignore
const store = configureStore({
    reducer: {
        [emptySplitApi.reducerPath]: emptySplitApi.reducer,
        project: reducer,
        user: userReducer
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(emptySplitApi.middleware),
})

export type TReduxStore = {
    project: IProjectRootState,
    user: IUserState
}

setupListeners(store.dispatch)

export { store }
