import React from 'react';
import { Link } from 'react-router-dom';
import './Details.css';

function Details({ podcast }) {
  function millisToMinutesAndSeconds(millis) {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
  const trackTimeInSeconds = millisToMinutesAndSeconds(podcast.trackTimeMillis);

  const date = new Date(podcast.releaseDate);
  const formattedDate = date.toLocaleDateString();
  return (
    <tr className="details__body-tr">
      <td className="details__body-td">
        <Link to={`episode/${podcast.trackId}`} className="details__link">
          {podcast.trackName}
        </Link>
      </td>
      <td>{formattedDate}</td>
      <td>{trackTimeInSeconds}</td>
    </tr>
  );
}

export default Details;
