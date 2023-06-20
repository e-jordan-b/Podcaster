import { useEffect, useState } from 'react';
import { fetchPodcasts } from '../services/api';

export function usePodcasts() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const response = await fetchPodcasts();
        setData(response);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  return { data, loading, error };
}
