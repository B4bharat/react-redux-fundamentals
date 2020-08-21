import { combinereducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "No Scrubs",
      duration: "4:05"
    },
    {
      title: "Smells Like Teen Spirit",
      duration: "5:13"
    },
    {
      title: "Aao Milo Chalein",
      duration: "4:15"
    },
    {
      title: "Chal Chelein",
      duration: "3:15"
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combinereducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
