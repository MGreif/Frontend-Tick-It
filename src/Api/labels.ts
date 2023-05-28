import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IProjectSimpleDTO, TProjectDTO } from "../types/Project.types"
import { BASE_URL } from "../gateway/constants"
import { ETags } from "./tags"
import { IBoard } from "../types/Board.types"
import { emptySplitApi } from "./emptySplitApi"
import { ILabel } from "../pages/labels/types"

const BASE = "/labels"
// Define a service using a base URL and expected endpoints
export const labelApi = emptySplitApi.injectEndpoints({
    endpoints: (builder) => ({
        createLabel: builder.mutation<ILabel, Partial<ILabel>>({
            query: (label) => ({
                url: BASE,
                method: "POST",
                body: label,
                headers: [["Content-Type", "application/json; charset=utf-8"]],
            }),
            invalidatesTags: [{ type: ETags.PROJECT }],
        }),
        deleteLabel: builder.mutation<ILabel, string>({
            query: (labelId) => ({
                url: BASE + "/" + labelId,
                method: "DELETE",
                headers: [["Content-Type", "application/json; charset=utf-8"]],
            }),
            invalidatesTags: [{ type: ETags.PROJECT }],
        }),
    }),
})

export const { useCreateLabelMutation, useDeleteLabelMutation } = labelApi
