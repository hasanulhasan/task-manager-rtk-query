import React from 'react';
import { useGetProjectsQuery } from '../../features/Projects/projectApi';
import Member from './Member';
import Projects from './Projects';
import { useGetTeamQuery } from '../../features/Team/teamApi';

const Sidebar = () => {
  const { data: projects, isLoading, isError, error } = useGetProjectsQuery();
  const { data: team } = useGetTeamQuery();

  // console.log(projects);
  let content = null;
  if (isLoading) content = <div>Loading...</div>;
  if (!isLoading && isError) content = <div>Error...</div>;
  if (!isLoading && !isError && projects?.length === 0) content = <div>No project was found</div>;
  if (!isLoading && !isError && projects?.length > 0) content = projects.map(project => <Projects key={project.id} project={project} />)

  let teamContent = null;
  if (isLoading) teamContent = <div>Loading...</div>;
  if (!isLoading && isError) teamContent = <div>Error...</div>;
  if (!isLoading && !isError && team?.length === 0) teamContent = <div>No project was found</div>;
  if (!isLoading && !isError && team?.length > 0) teamContent = team.map(team => <Member key={team.id} team={team} />)


  return (
    <div class="sidebar">
      {/* <!-- Projects List --> */}
      <div>
        <h3 class="text-xl font-bold">Projects</h3>
        <div class="mt-3 space-y-4">
          {content}
        </div>
      </div>

      {/* <!-- Team Members --> */}
      <div class="mt-8">
        <h3 class="text-xl font-bold">Team Members</h3>
        <div class="mt-3 space-y-4">
          {teamContent}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;