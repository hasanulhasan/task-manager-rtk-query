import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  projects: [],
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
    }
  }
})

export default filterSlice.reducer;
export const { projectSelect } = filterSlice.actions