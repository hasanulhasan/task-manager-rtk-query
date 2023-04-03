import React, { useEffect, useState } from 'react';
import { useAddTaskMutation, useGetTasksQuery } from '../features/Tasks/tasksApi';
import { useGetProjectsQuery } from '../features/Projects/projectApi';
import { useGetTeamQuery } from '../features/Team/teamApi';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const TaskForm = () => {
  const navigate = useNavigate();
  const { data: projects, isLoading: projectLoading, isError: projectError } = useGetProjectsQuery();
  const { data: team, isLoading: teamLoading, isError: teamError } = useGetTeamQuery();
  const [addTask, { isSuccess: addSuccess }] = useAddTaskMutation();

  let projectItem = null;
  if (!projectLoading && !projectError && projects.length > 0) projectItem = projects.map(project => <option>{project.projectName}</option>)
  let teamItem = null;
  if (!teamLoading && !teamError && team.length > 0) teamItem = team.map(teamMember => <option>{teamMember.name}</option>)

  const [taskName, setTaskName] = useState('');
  const [teamMember, setTeamMember] = useState('');
  const [projectName, setProjectName] = useState('');
  const [deadline, setDeadline] = useState('');

  const resetForm = () => {
    setTaskName('')
    setTeamMember('')
    setProjectName('')
    setDeadline('')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedTeamMember = team.find(teamPerson => teamPerson.name === teamMember);
    const selectedProjectName = projects.find(project => project.projectName === projectName);
    if (selectedProjectName && selectedTeamMember) {
      addTask({
        taskName,
        teamMember: selectedTeamMember,
        project: selectedProjectName,
        deadline,
        status: 'pending'
      })
      resetForm();
    }
  }
  useEffect(() => {

    if (addSuccess) {
      navigate('/')
      toast.success('Task Successfully added')
    }
  }, [addSuccess, navigate])

  return (
    <form class="space-y-6" onSubmit={handleSubmit}>
      <div class="fieldContainer">
        <label for="lws-taskName">Task Name</label>
        <input
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          type="text"
          name="taskName"
          id="lws-taskName"
          required
          placeholder="Implement RTK Query"
        />
      </div>

      <div class="fieldContainer">
        <label>Assign To</label>
        <select
          value={teamMember}
          onChange={(e) => setTeamMember(e.target.value)}
          name="teamMember"
          id="lws-teamMember" required>
          <option value="" hidden selected>Select Member</option>
          {
            teamItem
          }
        </select>
      </div>
      <div class="fieldContainer">
        <label for="lws-projectName">Project Name</label>
        <select
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          id="lws-projectName"
          name="projectName" required>
          <option value="" hidden selected>Select Project</option>
          {
            projectItem
          }
        </select>
      </div>

      <div class="fieldContainer">
        <label for="lws-deadline">Deadline</label>
        <input
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          type="date"
          name="deadline"
          id="lws-deadline" required />
      </div>

      <div class="text-right">
        <button type="submit" class="lws-submit">Save</button>
      </div>
    </form>
  );
};

export default TaskForm;