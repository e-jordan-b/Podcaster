import { useEffect, useState } from 'react';
import { fetchPodcastsData } from '../services/api';

export function usePodcasts(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetchPodcastsData(url);

        if (isMounted) {
          setData(response);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
}
