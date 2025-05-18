/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

import { play } from "../data.js";

// eslint-disable-next-line react/prop-types
const LibrarySong = ({
  song,
  setCurrentSong,
  songs,
  id,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const songSelectHandler = () => {
    const selectedSong = songs.filter((state) => state.id === id);
    setCurrentSong(selectedSong[0]);

    const newSong = songs.map((song) => {
      if (song.id === id) {
        return { ...song, active: true };
      } else {
        return { ...song, active: false };
      }
    });

    setSongs(newSong);

    play(isPlaying, audioRef);
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} />
      <div className="song-description">
        <h1>{song.name}</h1>
        <h2>{song.artist}</h2>
      </div>
    </div>
  );
};

export default LibrarySong;
