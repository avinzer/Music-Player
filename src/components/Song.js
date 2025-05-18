/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

// eslint-disable-next-line react/prop-types
const Song = ({ currentSong }) => {
  return (
    <div className="song-container">
      <img src={currentSong.cover} />
      <h1>{currentSong.name}</h1>
      <h2>{currentSong.artist}</h2>
    </div>
  );
};

export default Song;
