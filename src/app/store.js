import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';

import projectSliceReducer from '../features/Projects/projectSlice'
import tasksSliceReducer from '../features/Tasks/taskSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    projects: projectSliceReducer,
    tasks: tasksSliceReducer

  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
