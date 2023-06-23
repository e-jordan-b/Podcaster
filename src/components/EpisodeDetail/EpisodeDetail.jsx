import React from 'react';
import { useParams } from 'react-router';
import { usePodcasts } from '../../hooks/usePodcasts';
import './EpisodeDetails.css';

function EpisodeDetail() {
  const { podcastid, episodeid } = useParams();
  const url = `https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastid}&media=podcast&entity=podcastEpisode`)}`;
  const { data } = usePodcasts(url);
  const details = data ? JSON.parse(data.contents) : null;

  function findPodcastByTrackId(trackId) {
    if (details && details.results) {
      return details.results.find((podcast) => podcast.trackId === trackId);
    }
    return null;
  }
  const episodeDetails = findPodcastByTrackId(Number(episodeid));

  return (
    episodeDetails && (
      <div>
        <div className="episode-detail__container">
          <h1>{episodeDetails.trackName}</h1>
          <p dangerouslySetInnerHTML={{ __html: episodeDetails.description }} />
          <audio controls className="episode-detail__audio-track">
            <source src={`${episodeDetails.episodeUrl}`} type="audio/mpeg" />
            <track src={`${episodeDetails.closedCaptioning}`} kind="captions" label="English" srcLang="en" default />
          </audio>
        </div>
      </div>
    )
  );
}

export default EpisodeDetail;
