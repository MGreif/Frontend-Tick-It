import { ETags } from "./tags"
import { emptySplitApi } from "./emptySplitApi"
import { ITicket } from "../pages/tickets/types"

const BASE = "/tickets"
// Define a service using a base URL and expected endpoints
export const ticketApi = emptySplitApi.injectEndpoints({
    endpoints: (builder) => ({
        createTicket: builder.mutation<ITicket, Partial<ITicket>>({
            query: (ticket) => ({
                url: BASE,
                method: "POST",
                body: ticket,
                headers: [["Content-Type", "application/json; charset=utf-8"]],
            }),
            invalidatesTags: [{ type: ETags.TICKETS }, { type: ETags.PROJECT }],
        }),
        moveTicket: builder.mutation<
            string,
            { ticketId: string; subBoardId: string; index: number }
        >({
            query: ({ ticketId, subBoardId, index }) => ({
                url: BASE + "/" + ticketId + "/move",
                method: "PATCH",
                body: { subBoardId, index },
                headers: [["Content-Type", "application/json; charset=utf-8"]],
            }),
            invalidatesTags: [{ type: ETags.PROJECT }],
        }),
        deleteTicket: builder.mutation<unknown, string>({
            query: (ticketId) => ({
                url: BASE + "/" + ticketId,
                method: "DELETE",
            }),
            invalidatesTags: [{ type: ETags.PROJECT }],
        }),
        updateTicket: builder.mutation<
            unknown,
            { ticketId: string; ticketData: Partial<ITicket> }
        >({
            query: ({ ticketId, ticketData }) => ({
                url: BASE + "/" + ticketId,
                method: "PATCH",
                body: ticketData,
                headers: [["Content-Type", "application/json; charset=utf-8"]],
            }),
            invalidatesTags: (res) => [
                { type: ETags.PROJECT },
                { type: ETags.TICKETS },
            ],
        }),
        getDetailedTicket: builder.query<ITicket, string>({
            query: (ticketId) => BASE + "/" + ticketId,
            providesTags: (res) => [
                { type: ETags.TICKETS, id: res?._id },
                { type: ETags.TICKETS },
            ],
        }),
    }),
})

export const {
    useCreateTicketMutation,
    useDeleteTicketMutation,
    useGetDetailedTicketQuery,
    useLazyGetDetailedTicketQuery,
    useMoveTicketMutation,
    useUpdateTicketMutation,
} = ticketApi
