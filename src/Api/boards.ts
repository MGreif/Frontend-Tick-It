import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IProjectSimpleDTO, TProjectDTO } from "../types/Project.types"
import { BASE_URL } from "../gateway/constants"
import { ETags } from "./tags"
import { IBoard } from "../types/Board.types"
import { emptySplitApi } from "./emptySplitApi"

const BASE = "/boards"
// Define a service using a base URL and expected endpoints
export const boardApi = emptySplitApi.injectEndpoints({
    endpoints: (builder) => ({
        createBoard: builder.mutation<IBoard, Partial<IBoard>>({
            query: (board) => ({
                url: BASE,
                method: "POST",
                body: board,
                headers: [["Content-Type", "application/json; charset=utf-8"]],
            }),
            invalidatesTags: [{ type: ETags.PROJECT }],
        }),
    }),
})

export const { useCreateBoardMutation } = boardApi
