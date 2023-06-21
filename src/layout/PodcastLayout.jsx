import React from 'react';
import { Outlet, useParams } from 'react-router';
import { usePodcasts } from '../hooks/usePodcasts';

function PodcastLayout() {
  const { podcastid } = useParams();
  // const url = `https://itunes.apple.com/lookup?id=${podcastid}`;
  // const url = `https://itunes.apple.com/lookup?id=${podcastid}&media=podcast&entity=podcastEpisode`;
  const url = `https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastid}&media=podcast&entity=podcastEpisode`)}`;
  const { data } = usePodcasts(url);
  const details = data ? JSON.parse(data.contents) : null;
  if (details) console.log(details.results[0].artistName);
  return (
    <>
      <div className="podcast-layout">
        {details ? (<h1>{details.results[0].artistName}</h1>) : null}
      </div>
      <Outlet />
    </>
  );
}

export default PodcastLayout;
