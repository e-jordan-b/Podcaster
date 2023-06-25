import React from 'react';
import { useParams } from 'react-router';
import { usePodcasts } from '../../hooks/usePodcasts';
import Details from '../Details/Details';
import './PodcastDetail.css';

function PodcastDetail() {
  const { podcastid } = useParams();
  const url = `https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastid}&media=podcast&entity=podcastEpisode`)}`;
  const { data, loading } = usePodcasts(url);
  const details = data ? JSON.parse(data.contents) : null;
  const episodeCount = details ? details.results.length - 1 : null;

  return (
    loading ? (
      <div className="spinner" />
    ) : (
      details && (
        <div className="details_containter">
          <div className="podcast-detail__number-episodes">
            <h1>
              Episodes:
              {' '}
              {episodeCount}
            </h1>
          </div>
          <section className="podcast-detail__table-information">
            <table className="podcast-detail__content-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody className="podcast-detail__table-body">
                {details.results
                  .slice(1)
                  .map((podcast) => (
                    <Details key={podcast.trackId} podcast={podcast} />
                  ))}
              </tbody>
            </table>
          </section>
        </div>
      )
    )
  );
}

export default PodcastDetail;
