import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { projectSelect } from '../../features/filterSlice';
import { useGetProjectsQuery } from '../../features/Projects/projectApi';

const Projects = ({ project }) => {
  const dispatch = useDispatch();
  const { projects } = useSelector(state => state.filter)
  // const { data: project, isLoading, isError, error } = useGetProjectsQuery();
  const { projectName, colorClass } = project || {}

  const handleSelectedProject = () => {
    dispatch(projectSelect(projectName))
  }
  console.log(project)

  return (
    <div class="checkbox-container">
      <input
        checked={projects.includes(project.projectName)}
        onChange={handleSelectedProject}
        type="checkbox" class={`${colorClass}`} />
      <p class="label">{projectName}</p>
    </div>
  );
};

export default Projects;