import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:15" },
    { title: "Macarena", duration: "2:15" },
    { title: "All Star", duration: "1:15" },
    { title: "No Title", duration: "6:15" }
  ];
};
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
