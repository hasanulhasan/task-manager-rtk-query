import React from 'react';
import Navbar from '../components/Navbar';
import EditTaskForm from '../components/EditTaskForm';
import { useGetTaskQuery } from '../features/Tasks/tasksApi';
import { useNavigate, useParams } from 'react-router-dom';

const EditTask = () => {
  const { taskId } = useParams();
  const { data: task, isLoading, isError } = useGetTaskQuery(taskId);
  let taskContent = null;
  if (!isLoading && !isError && task) taskContent = <EditTaskForm task={task} />

  return (
    <div class="text-[#111827]">
      <Navbar />
      <div class="container relative">
        <main class="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
          <h1 class="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">
            Edit Task
          </h1>
          <div class="justify-center mb-10 space-y-2 md:flex md:space-y-0">
            {taskContent}
          </div>
        </main>
      </div>
    </div>
  );
};

export default EditTask;