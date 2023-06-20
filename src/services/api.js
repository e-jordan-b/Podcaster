export async function fetchPodcasts(url) {
  try {
    // const response = await fetch(PODCASTS_API_URL);
    // console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching podcasts', error);
    return null;
  }
}
