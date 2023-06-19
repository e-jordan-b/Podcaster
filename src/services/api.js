const PODCASTS_API_URL = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';

export async function fetchPodcasts() {
  try {
    const response = await fetch(PODCASTS_API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching podcasts', error);
    return null;
  }
}
