import React from 'react';
import { usePodcasts } from '../../hooks/usePodcasts';
import Podcast from '../Podcast/Podcast';
import './Home.css';
import SearchBar from '../SearchBar/SearchBar';
import { useSearch } from '../../hooks/useSearch';

function Home() {
  const PODCASTS_API_URL = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';

  const { data } = usePodcasts(PODCASTS_API_URL);
  const { query, podcasts, handleChange } = useSearch(data);
  const hasPodcasts = podcasts?.length > 0;

  return (
    <>
      <SearchBar
        query={query}
        podcasts={podcasts}
        handleChange={handleChange}
      />
      <ul className="podcasts_list">
        {hasPodcasts
          ? podcasts
            .map((podcast) => <Podcast key={podcast.id.attributes['im:id']} id={podcast.id.attributes['im:id']} podcast={podcast} />)
          : null}
      </ul>
    </>
  );
}

export default Home;
