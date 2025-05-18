/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import Player from "./player/player";
import { selectedSong } from "./actions";
import Song from "./player/song";


const Test = () => {

    return (
        <div>
            <Player />
            <Song currentSong={selectedSong}/>
        </div>
    )
}

export default Test