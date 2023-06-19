import { useEffect, useState } from 'react';
import { fetchPodcasts } from '../services/api';

export function usePodcasts() {
  const [podcasts, setPodcasts] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const response = await fetchPodcasts();
        setPodcasts(response);
      } catch (error) {
        console.error('Cannot get date', error);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  return { podcasts, loading };
}
