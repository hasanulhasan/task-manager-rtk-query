import React from 'react';
import { useDispatch } from 'react-redux';
import { projectSelect } from '../../features/filterSlice';

const Projects = ({ project }) => {
  const dispatch = useDispatch();
  // console.log(project)
  const { id, projectName, colorClass } = project

  const handleSelectedProject = () => {
    dispatch(projectSelect(projectName))
  }

  return (
    <div class="checkbox-container">
      <input onChange={handleSelectedProject} type="checkbox" class={`${colorClass}`} />
      <p class="label">{projectName}</p>
    </div>
  );
};

export default Projects;