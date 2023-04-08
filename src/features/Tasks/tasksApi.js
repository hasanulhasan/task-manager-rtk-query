import { apiSlice } from "../api/apiSlice";

export const tasksApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getTasks: builder.query({
      query: () => '/tasks',
      // providesTags: ['tasks']
    }),

    getTask: builder.query({
      query: (id) => `/tasks/${id}`
    }),

    addTask: builder.mutation({
      query: (data) => ({
        url: `/tasks`,
        method: 'POST',
        body: data
      }),
      // invalidatesTags: ['tasks']
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData('getTasks', undefined, (draft) => {
              draft.push(data);
            })
          );
        } catch (error) {
          console.error(error);
        }
      }
    }),

    statusChange: builder.mutation({
      query: ({ id, data }) => ({
        url: `/tasks/${id}`,
        method: 'PATCH',
        body: data
      }),
      invalidatesTags: ['tasks']
    }),

    editTask: builder.mutation({
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
    })
  })
})


export const { useGetTasksQuery, useStatusChangeMutation, useDeleteTaskMutation, useAddTaskMutation, useGetTaskQuery, useEditTaskMutation } = tasksApi;