import React from 'react';
import { useRoutes } from 'react-router-dom';

import Home from './pages/Home';
import Challenges from './pages/Challenges';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import ProjectDetails from './pages/ProjectDetails';
import ChallengeDetails from './pages/ChallengeDetails';

function App() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/challenges', element: <Challenges /> },
    { path: '/challenges/:id', element: <ChallengeDetails /> },
    { path: '/projects', element: <Projects /> },
    { path: '/projects/:id', element: <ProjectDetails /> },
    { path: '*', element: <NotFound /> },
  ]);
  return routes;
}

export default App;
