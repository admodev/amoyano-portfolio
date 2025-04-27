// React modules
import React from 'react';
import { createRoot } from 'react-dom/client';

// Third party modules
import { BrowserRouter, Route, Routes } from 'react-router';

// Styles
import './index.css';

// Views
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
  </BrowserRouter>
);
