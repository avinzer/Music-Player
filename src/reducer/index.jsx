import data from "../util"
import { combineReducers } from "redux"


const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload
    }
    return selectedSong
}


export const combinedReducer = combineReducers({
    songs: data,
    selectedSong: selectedSongReducer
})