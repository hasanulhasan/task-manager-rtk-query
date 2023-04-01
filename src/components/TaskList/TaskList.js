import React from 'react';
import { useGetTasksQuery } from '../../features/Tasks/tasksApi';
import Task from './Task';

const TaskList = () => {
  const { data: tasks, isLoading, isError, } = useGetTasksQuery();
  // console.log(tasks)
  let content = null;
  if (isLoading) content = <div>Loading...</div>;
  if (!isLoading && isError) content = <div>Error...</div>;
  if (!isLoading && !isError && tasks?.length === 0) content = <div>No task was found</div>;
  if (!isLoading && !isError && tasks?.length > 0) content = tasks.map(task => <Task key={task.id} task={task} />)

  return (
    <div class="lws-task-list">
      {content}
    </div>
  );
};

export default TaskList;