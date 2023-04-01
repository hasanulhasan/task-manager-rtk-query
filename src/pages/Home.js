import React from 'react';
import AddTask from '../components/AddTask';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import TaskList from '../components/TaskList/TaskList';

const Home = () => {
  return (
    <div class="text-[#111827]">
      <Navbar />
      <div class="container relative">
        <Sidebar />

        <div class="lg:pl-[16rem] 2xl:pl-[23rem]">
          <main class="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
            <div class="justify-between mb-10 space-y-2 md:flex md:space-y-0">
              <AddTask />
            </div>
            <TaskList />
          </main>
        </div>
      </div>

    </div>
  );
};

export default Home;