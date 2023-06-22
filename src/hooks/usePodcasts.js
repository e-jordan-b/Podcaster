import { useEffect, useState } from 'react';
import { fetchPodcasts } from '../services/api';

const CACHE_EXPIRATION = 24 * 60 * 60 * 1000;

export function usePodcasts(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const cachedData = getCachedData(url);

        if (cachedData) {
          if (isMounted) {
            setData(cachedData);
            setLoading(false);
          }
        } else {
          if (!url) return;
          const response = await fetchPodcasts(url);
          if (isMounted) {
            setData(response);
            cacheData(url, response);
            setLoading(false);
          }
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
          setLoading(false);
        }
      }
    }

    function getCachedData() {
      const cachedData = JSON.parse(localStorage.getItem(url));

      if (cachedData && Date.now() - cachedData.timestamp < CACHE_EXPIRATION) {
        setLoading(false);
        return cachedData.data;
      }

      return null;
    }

    function cacheData() {
      const cachedData = {
        timestamp: Date.now(),
        data,
      };

      localStorage.setItem(url, JSON.stringify(cachedData));
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return { data, loading, error };
}
