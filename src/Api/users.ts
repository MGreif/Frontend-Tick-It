import { emptySplitApi } from "./emptySplitApi"
import { TUser } from "../redux/user.reducer"
import { ETags } from "./tags"

const BASE = "/users"
// Define a service using a base URL and expected endpoints
export const userApi = emptySplitApi.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query<TUser | null, string>({
            query: (keycloakId) => ({
                url: BASE + "/" + keycloakId,
                method: "GET",
                headers: [["Content-Type", "application/json; charset=utf-8"]],
            }),
            providesTags: (res) => res ? [{ type: ETags.USERS, id: res._id}] : []
        }),
        createUser: builder.mutation<TUser | null, Partial<TUser>>({
            query: (user) => ({
                url: BASE + "/",
                method: "POST",
                body: user
            }),
            invalidatesTags: [ETags.USERS]
        }),
        deleteUsers: builder.mutation<null, string>({
            query: (_id) => ({
                url: BASE + "/" + _id,
                method: "DELETE",
            }),
            invalidatesTags: [ETags.USERS]
        })
    }),
})

export const { useGetUserQuery, useLazyGetUserQuery, useCreateUserMutation, useDeleteUsersMutation } = userApi
