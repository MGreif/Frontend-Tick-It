import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { ETags } from "./tags"
import { BASE_URL } from "./constants"

export const emptySplitApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: () => ({}),
    tagTypes: [
        ETags.PROJECT,
        ETags.PROJECTS_SLIM,
        ETags.BOARDS,
        ETags.TICKETS,
        ETags.LABELS,
        ETags.USERS
    ],
})
