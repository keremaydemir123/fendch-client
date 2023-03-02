import { useRoutes } from 'react-router-dom';

import Home from './pages/Home';
import Challenges from './pages/Challenges';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';

function App() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/challenges', element: <Challenges /> },
    { path: '/projects', element: <Projects /> },
    { path: '*', element: <NotFound /> },
  ]);
  return routes;
}

export default App;
