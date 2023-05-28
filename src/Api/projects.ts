import { IProjectSimpleDTO, TProjectDTO } from "../types/Project.types"
import { ETags } from "./tags"
import { emptySplitApi } from "./emptySplitApi"

const BASE = "/projects"
// Define a service using a base URL and expected endpoints
export const projectApi = emptySplitApi.injectEndpoints({
    endpoints: (builder) => ({
        getProjectsByUser: builder.query<IProjectSimpleDTO[], string>({
            query: (userId) => `${BASE}/by-user/${userId}`,
            providesTags: (res) =>
                res
                    ? [
                          ...res.map((r) => ({
                              type: ETags.PROJECTS_SLIM,
                              id: r._id,
                          })),
                          { type: ETags.PROJECTS_SLIM },
                      ]
                    : [{ type: ETags.PROJECTS_SLIM }],
        }),
        getProjectData: builder.query<TProjectDTO, string>({
            query: (projectId) => `${BASE}/${projectId}`,
            keepUnusedDataFor: 36000,
            providesTags: (result) => (result ? [{ type: ETags.PROJECT }] : []),
        }),
        createProject: builder.mutation<TProjectDTO, Partial<TProjectDTO>>({
            query: (project) => ({
                url: BASE,
                method: "POST",
                body: { data: project },
                headers: [["Content-Type", "application/json; charset=utf-8"]],
            }),
            invalidatesTags: [ETags.PROJECTS_SLIM],
        }),
    }),
})

export const {
    useGetProjectsByUserQuery,
    useLazyGetProjectsByUserQuery,
    useGetProjectDataQuery,
    useLazyGetProjectDataQuery,
    useCreateProjectMutation,
} = projectApi
