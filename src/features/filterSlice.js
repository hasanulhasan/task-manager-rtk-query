import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  projects: [],
  search: ''
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    projectSelect: (state, action) => {
      const checkProject = state.projects.find(project => project === action.payload)
      if (checkProject === undefined) {
        state.projects.push(action.payload)
      }
      else {
        const updatedProject = state.projects.filter(project => project !== action.payload)
        state.projects = updatedProject
      }
    },
    searchTask: (state, action) => {
      state.search = action.payload;
    }
  }
})

export default filterSlice.reducer;
export const { projectSelect, searchTask } = filterSlice.actions