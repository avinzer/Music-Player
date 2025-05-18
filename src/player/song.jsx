/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { connect } from "react-redux";


const Song = (props) => {
    console.log(props)
    const currentSong = props.song;
    return (
        <div className="song-container">
            <img src={currentSong.cover} alt={currentSong.name} />
            <h1>{currentSong.name}</h1>
            <span>{currentSong.artist}</span>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        song: state.selectedSong
    }
}

export default connect(mapStateToProps)(Song)