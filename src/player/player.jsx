/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useRef} from "react";
import { connect } from "react-redux";
import { selectedSong } from "../actions";

const Player = (props) => {
    const renderList = () => {
        return props.songs.map((song) => {
            return (
                <div className="song-container" key={song.id}>
                    <img width="40px" src={song.cover} alt={song.name} />
                    <h2>{song.name}</h2>
                    <span>{song.artist}</span>
                    <button onClick={() => props.selectedSong(song)}>Select song</button>
                </div>
            )
        }
        )
    }
    return (
        <div className="play-control">
            {renderList()}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        songs: state.songs
    }
}

export default connect(mapStateToProps, {selectedSong})(Player)