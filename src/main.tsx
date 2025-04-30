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
import NotFoundPage from './shared/views/NotFoundPage';

// Components
import ErrorBoundary from './shared/components/ErrorBoundary';
import NavBar from './shared/components/NavBar';

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <BrowserRouter>
      <NavBar />
      <div className='mainViewContainer'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  </ErrorBoundary>
);
