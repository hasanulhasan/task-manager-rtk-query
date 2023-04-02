import React from 'react';
import './App.css';
import Home from './pages/Home';
import CreateTask from './pages/CreateTask';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks/add" element={<CreateTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
