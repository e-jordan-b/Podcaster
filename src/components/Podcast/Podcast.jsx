import React from 'react';
import './Podcast.css';

function Podcast({ podcast }) {
  return (
    <li className="podcast">
      <img src={podcast['im:image'][2].label} alt="" />
      <div className="container">
        <div className="info_containter">
          <h3>{podcast['im:name'].label.toUpperCase()}</h3>
          <p>
            Author:
            <span className="author-name">{podcast['im:artist'].label}</span>
          </p>
        </div>
      </div>
    </li>
  );
}

export default Podcast;
