import React from 'react';
import { Outlet } from 'react-router';

function PodcastLayout() {
  return (
    <>
      <div className="podcast-layout">
        <h1>PodcastLayout</h1>
      </div>
      <Outlet />
    </>
  );
}

export default PodcastLayout;
