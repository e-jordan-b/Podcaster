import React from 'react';
import { usePodcasts } from '../../hooks/usePodcasts';
import Podcast from '../Podcast/Podcast';
import './Home.css';

function Home() {
  const { data, loading, error } = usePodcasts();
  const hasPodcasts = data?.feed?.entry?.length > 0;

  return (
    <ul className="podcasts_list">
      {hasPodcasts
        ? data.feed.entry
          .map((podcast) => <Podcast key={podcast.id.attributes} podcast={podcast} />)
        : null}
    </ul>
  );
}

export default Home;
