import React from 'react';
import { useLocation, useParams } from 'react-router';
import { usePodcasts } from '../../hooks/usePodcasts';

function EpisodeDetail() {
  const { podcastid, episodeid } = useParams();
  const url = `https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastid}&media=podcast&entity=podcastEpisode`)}`;
  const { data, isLoading } = usePodcasts(url);
  const details = data ? JSON.parse(data.contents) : null;

  function findPodcastByTrackId(episodeid) {
    if (details && details.results) {
      return details.results.find((podcast) => podcast.trackId === episodeid);
    }
    return null;
  }
  const episodeDetails = findPodcastByTrackId(Number(episodeid));
  return (
    episodeDetails ? (
      <div>
        <div>
          <h1>{episodeDetails.trackName}</h1>
          <p dangerouslySetInnerHTML={{ __html: episodeDetails.description }} />
        </div>
      </div>
    ) : null

  );
}

export default EpisodeDetail;
