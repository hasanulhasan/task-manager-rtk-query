import React from 'react';
import './App.css';
import Home from './pages/Home';
import CreateTask from './pages/CreateTask';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditTask from './pages/EditTask';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks/add" element={<CreateTask />} />
        <Route path="/tasks/edit/:taskId" element={<EditTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
