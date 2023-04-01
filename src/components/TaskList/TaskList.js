import React from 'react';
import { useGetTasksQuery } from '../../features/Tasks/tasksApi';
import Task from './Task';
import { useSelector } from 'react-redux';

const TaskList = () => {
  const { projects } = useSelector(state => state.filter)
  // console.log(projects);
  const { data: tasks, isLoading, isError, } = useGetTasksQuery();
  // console.log(tasks)
  let content = null;
  if (isLoading) content = <div>Loading...</div>;
  if (!isLoading && isError) content = <div>Error...</div>;
  if (!isLoading && !isError && tasks?.length === 0) content = <div>No task was found</div>;
  if (!isLoading && !isError && tasks?.length > 0) content = tasks
    .filter(task => {
      // if (task.project.projectName.includes(projects)) {
      return task
      // }
      // else {
      // console.log(task)
      // return null
      // }
      // const filterTasks = 
      // projects.map(project => {

      //   // if (project === task.project.projectName)
      //   return task
      // })

      // console.log(task.project.projectName)

      // return task
    })
    .map(task => <Task key={task.id} task={task} />)

  return (
    <div class="lws-task-list">
      {content}
    </div>
  );
};

export default TaskList;