import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import Layout from './components/layouts/Layout';
import HomePage from './pages/HomePage';
import LifeGiver from './pages/LifeGiver';
import ElderStories from './pages/ElderStories';
import Mohkins from './pages/Mohkins';
import Healing from './pages/Healing';
import MorningLight from './pages/MorningLight';
import Bufallo from './pages/Bufallo';
import Grizzly from './pages/Grizzly';
import Cochrane from './pages/Cochrane';
import BufalloQuiz from './pages/BufalloQuiz';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // top-level layout
    children: [
      { index: true, element: <HomePage /> },
      { path: 'lifegiver', element: <LifeGiver /> },
      { path: 'elderstories', element: <ElderStories /> },
      { path: 'mohkins', element: <Mohkins /> },
      { path: 'healing', element: <Healing /> },
      { path: 'morninglight', element: <MorningLight /> },
      { path: 'bufallo', element: <Bufallo /> },
      { path: 'grizzly', element: <Grizzly /> },
      { path: 'cochrane', element: <Cochrane /> },
      { path: 'bufallo/quiz', element: <BufalloQuiz /> }

    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* Provides routing for your app */}
  </StrictMode>
);
