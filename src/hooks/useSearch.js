import { useEffect, useState } from 'react';

export function useSearch(data) {
  const [query, setQuery] = useState('');
  const [podcasts, setPodcasts] = useState(data?.feed?.entry || []);

  useEffect(() => {
    if (data) {
      setPodcasts(data.feed.entry);
    }
  }, [data]);

  function searchPodcasts(query) {
    const filteredPodcasts = data.feed.entry.filter((el) => {
      const name = el['im:name'].label.toLowerCase();
      const author = el['im:artist'].label.toLowerCase();
      return name.includes(query) || author.includes(query);
    });
    setPodcasts(filteredPodcasts);
  }

  function handleChange(newQuery) {
    if (newQuery.startsWith(' ')) return;
    setQuery(newQuery.toLowerCase());
    if (newQuery === '') {
      setPodcasts(data?.feed?.entry || []);
    } else {
      searchPodcasts(newQuery);
    }
  }

  return { query, podcasts, handleChange };
}
