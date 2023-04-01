import React from 'react';

const Projects = ({ project }) => {
  // console.log(project)
  const { id, projectName, colorClass } = project
  return (
    <div class="checkbox-container">
      <input type="checkbox" class={`${colorClass}`} checked />
      <p class="label">{projectName}</p>
    </div>
  );
};

export default Projects;