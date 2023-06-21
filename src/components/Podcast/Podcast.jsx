import React from 'react';
import { Link } from 'react-router-dom';
import './Podcast.css';

function Podcast({ podcast, id }) {
  const url = `podcast/${id}`;
  return (
    <li className="podcast">
      <img className="home-image" src={podcast['im:image'][2].label} alt="" />
      <div className="container">
        <Link className="link-to-details" to={url}>
          <div className="info_containter">
            <h3>{podcast['im:name'].label.toUpperCase()}</h3>
            <p>
              Author:
              <span className="author-name">{podcast['im:artist'].label}</span>
            </p>
          </div>
        </Link>
      </div>
    </li>
  );
}

export default Podcast;
