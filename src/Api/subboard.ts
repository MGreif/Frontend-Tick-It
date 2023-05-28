import { ETags } from "./tags"
import { emptySplitApi } from "./emptySplitApi"
import { ISubBoard } from "../components/types"

const BASE = "/subBoards"
// Define a service using a base URL and expected endpoints
export const subboardApi = emptySplitApi.injectEndpoints({
    endpoints: (builder) => ({
        createSubBoard: builder.mutation<
            ISubBoard,
            { data: Partial<ISubBoard>; boardId: string }
        >({
            query: ({ boardId, data }) => ({
                url: BASE,
                method: "POST",
                body: { ...data, boardId },
                headers: [["Content-Type", "application/json; charset=utf-8"]],
            }),
            invalidatesTags: [{ type: ETags.PROJECT }],
        }),
        deleteSubBoard: builder.mutation<unknown, string>({
            query: (subBoardId) => ({
                url: BASE + "/" + subBoardId,
                method: "DELETE",
                headers: [["Content-Type", "application/json; charset=utf-8"]],
            }),
            invalidatesTags: [{ type: ETags.PROJECT }],
        }),
    }),
})

export const { useCreateSubBoardMutation, useDeleteSubBoardMutation } =
    subboardApi
