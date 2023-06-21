import React from 'react';
import { useParams } from 'react-router';
import { usePodcasts } from '../../hooks/usePodcasts';
import Details from '../Details/Details';
import './PodcastDetail.css';

function PodcastDetail() {
  const { podcastid } = useParams();
  // const url = `https://itunes.apple.com/lookup?id=${podcastid}`;
  // const url = `https://itunes.apple.com/lookup?id=${podcastid}&media=podcast&entity=podcastEpisode`;
  const url = `https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastid}&media=podcast&entity=podcastEpisode`)}`;
  const { data } = usePodcasts(url);
  // if (data) { console.log(JSON.parse(data.contents)); }
  const details = data ? JSON.parse(data.contents) : null;
  return (
    <table className="content-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Duration</th>
        </tr>
      </thead>

      <tbody className="table-body">
        {details ? (
          details.results.map((podcast) => (
            <Details key={podcast.trackId} podcast={podcast} />
          ))
        ) : (
          <p>No data available.</p>
        )}
      </tbody>
    </table>
  );
}

export default PodcastDetail;
