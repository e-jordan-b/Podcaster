import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

// components
import Home from './components/Home/Home';

// layouts
import AppLayout from './layout/AppLayout';
import PodcastLayout from './layout/PodcastLayout';
import PodcastDetail from './components/PodcastDetail/PodcastDetail';
import EpisodeDetail from './components/EpisodeDetail/EpisodeDetail';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route element={<PodcastLayout />}>
        <Route path="podcast/:podcastid" element={<PodcastDetail />} />
        <Route path="podcast/:podcastid/episode/:episodeid" element={<EpisodeDetail />} />
      </Route>
    </Route>,
  ),
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
