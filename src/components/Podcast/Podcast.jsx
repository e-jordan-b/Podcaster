import React from 'react';
import { Link } from 'react-router-dom';
import './Podcast.css';

function Podcast({ podcast, id }) {
  const url = `podcast/${id}`;
  return (
    <li className="podcast-item">
      <img className="podcast-item__image" src={podcast['im:image'][2].label} alt="" />
      <div className="podcast-item__container">
        <Link className="podcast-item__link" to={url}>
          <div className="podcast-item__info">
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
