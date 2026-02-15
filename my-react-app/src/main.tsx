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
import LifeGiverQuiz from './pages/LifeGiverQuiz';
import CochraneQuiz from './pages/CochraneQuiz.tsx';
import GrizzlyQuiz from './pages/GrizzlyQuiz.tsx';
import HealingQuiz from './pages/HealingQuiz.tsx';
import MohkinsQuiz from './pages/MohkinsQuiz.tsx';
import MorningLightQuiz from './pages/MorningLightQuiz.tsx';
import ElderStoriesQuiz from './pages/ElderStoriesQuiz';
import Sources from './pages/Sources.tsx';

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
      { path: 'bufallo/quiz', element: <BufalloQuiz /> },
      { path: 'lifegiver/quiz', element: <LifeGiverQuiz /> },
      { path: 'cochrane/quiz', element: <CochraneQuiz /> },
      { path: 'grizzly/quiz', element: <GrizzlyQuiz /> },
      { path: 'healing/quiz', element: <HealingQuiz /> },
      { path: 'mohkins/quiz', element: <MohkinsQuiz /> },
      { path: 'morninglight/quiz', element: <MorningLightQuiz /> },
      { path: 'elderstories/quiz', element: <ElderStoriesQuiz /> },
      { path: 'sources', element: <Sources /> }

    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* Provides routing for your app */}
  </StrictMode>
);