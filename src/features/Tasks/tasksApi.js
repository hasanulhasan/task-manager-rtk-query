import { apiSlice } from "../api/apiSlice";

export const tasksApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getTasks: builder.query({
      query: () => '/tasks',
      providesTags: ['tasks']
    }),

    statusChange: builder.mutation({
      query: ({ id, data }) => ({
        url: `/tasks/${id}`,
        method: 'PATCH',
        body: data
      }),
      invalidatesTags: ['tasks']
    }),

    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['tasks']
    }),

    addTask: builder.mutation({
      query: (data) => ({
        url: `/tasks`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['tasks']
    })

  })
})


export const { useGetTasksQuery, useStatusChangeMutation, useDeleteTaskMutation, useAddTaskMutation } = tasksApi;