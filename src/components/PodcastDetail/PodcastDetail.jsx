import React from 'react';
import { useParams } from 'react-router';
import { usePodcasts } from '../../hooks/usePodcasts';

function PodcastDetail() {
  const { podcastid } = useParams();
  console.log(podcastid);
  // const url = `https://itunes.apple.com/lookup?id=${podcastid}`;
  // const url = `https://itunes.apple.com/lookup?id=${podcastid}&media=podcast&entity=podcastEpisode`;
  const url = `https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastid}&media=podcast&entity=podcastEpisode`)}`;
  const { data } = usePodcasts(url);
  if (data) { console.log(JSON.parse(data.contents)); }
  return (
    <h1>PodcastDetail</h1>
  );
}

export default PodcastDetail;
