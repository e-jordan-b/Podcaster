import React from 'react';
import { useLocation } from 'react-router';

function EpisodeDetail() {
  console.log('im here');
  const location = useLocation();
  console.log(location);
  // const { podcast } = location.state;
  // console.log(podcast);
  return (
    <h1>EpisodeDetail</h1>
  );
}

export default EpisodeDetail;
