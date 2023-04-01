import { apiSlice } from "../api/apiSlice";

export const tasksApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getTasks: builder.query({
      query: () => '/tasks'
    }),

    statusChange: builder.mutation({
      query: ({ id, data }) => ({
        url: `/tasks/${id}`,
        method: 'PATCH',
        body: data
      })
    })

  })
})


export const { useGetTasksQuery, useStatusChangeMutation } = tasksApi;