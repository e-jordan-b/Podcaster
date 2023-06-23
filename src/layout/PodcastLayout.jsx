import React from 'react';
import { Outlet, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { usePodcasts } from '../hooks/usePodcasts';
import './PodcastLayout.css';

function PodcastLayout() {
  const { podcastid } = useParams();
  const url = `https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastid}&media=podcast&entity=podcastEpisode`)}`;
  const { data } = usePodcasts(url);
  const details = data ? JSON.parse(data.contents) : null;

  let truncatedDescription = '';
  if (details && details.results[1].description.length > 150) {
    truncatedDescription = `${details.results[1].description.substring(0, 150)}...`;
  } else if (details) {
    truncatedDescription = details.results[1].description;
  }

  return (
    <div className="podcast-layout">
      {details && (
      <aside className="podcast-sidebar">
        <div className="podcast-details-container">
          <div className="podcast-image-container">
            <Link to={`podcast/${podcastid}`}>
              <img src={details.results[0].artworkUrl100} alt="" />
            </Link>
          </div>
          <div className="podcast-title-container">
            <Link to={`podcast/${podcastid}`}>
              <h3>{details.results[0].trackName}</h3>
            </Link>
            <p>
              by
              {' '}
              <span>
                {details.results[0].artistName}
              </span>
            </p>
          </div>
          <div className="podcast-description-container">
            <h4>Description:</h4>
            <p>{truncatedDescription}</p>
          </div>
        </div>
      </aside>
      )}
      <Outlet />
    </div>
  );
}

export default PodcastLayout;
