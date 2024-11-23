import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/styles/base.css';

import { App } from './App.tsx';
import { Home } from './pages/Home';
import { User } from './pages/User';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="user/:id" element={<User />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
