import { emptySplitApi } from "./emptySplitApi"
import { TUser } from "../redux/user.reducer"

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
        }),
    }),
})

export const { useGetUserQuery, useLazyGetUserQuery } = userApi
