async function fetchPodcasts(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching podcasts', error);
    return null;
  }
}

const CACHE_EXPIRATION = 24 * 60 * 60 * 1000;

function getCachedData(url) {
  const cachedData = JSON.parse(localStorage.getItem(url));

  if (cachedData && Date.now() - cachedData.timestamp < CACHE_EXPIRATION) {
    return cachedData.data;
  }

  return null;
}

function cacheData(url, data) {
  try {
    const cachedData = {
      timestamp: Date.now(),
      data,
    };
    localStorage.setItem(url, JSON.stringify(cachedData));
  } catch (error) {
    console.error(error, 'heellooo');
  }
}

export async function fetchPodcastsData(url) {
  if (!url) {
    return null;
  }

  const cachedData = getCachedData(url);

  if (cachedData) {
    return cachedData;
  }

  const response = await fetchPodcasts(url);

  cacheData(url, response);

  return response;
}
