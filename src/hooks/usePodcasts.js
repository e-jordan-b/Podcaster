import { useEffect, useState } from 'react';
import { fetchPodcasts } from '../services/api';

const CACHE_EXPIRATION = 24 * 60 * 60 * 1000;

export function usePodcasts(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function getCachedData() {
    const cachedData = JSON.parse(localStorage.getItem(url));

    if (cachedData && Date.now() - cachedData.timestamp < CACHE_EXPIRATION) {
      return cachedData.data;
    }

    return null;
  }

  function cacheData(url, data) {
    const cachedData = {
      timestamp: Date.now(),
      data,
    };

    localStorage.setItem(url, JSON.stringify(cachedData));
  }

  useEffect(() => {
    async function getData() {
      // try {
      //   setLoading(true);
      //   const response = await fetchPodcasts(url);
      //   setData(response);
      // } catch (err) {
      //   setError(err);
      // } finally {
      //   setLoading(false);
      // }
      setLoading(true);
      try {
        const cachedData = getCachedData(url);

        if (cachedData) {
          setData(cachedData);
        } else {
          const response = await fetchPodcasts(url);
          setData(response);
          cacheData(url, response);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [url]);

  return { data, loading, error };
}
