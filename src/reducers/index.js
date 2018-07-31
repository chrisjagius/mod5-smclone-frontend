import SongJSON from '../songs/A/A.ref.json';

const initialState = {
  currentSong: SongJSON,
  currentTime: 0,
  songStartTime: 0,
  arrowHeight: 100
};

function reducer(state = initialState, action) {
  switch (action.type) {
  case 'UPDATE_TIME':
    return {
      ...state,
      currentTime: action.currentTime
    };
  case 'UPDATE_SONG_START':
    return {
      ...state,
      songStartTime: action.songStartTime
    };
  case 'UPDATE_ARROW_HEIGHT':
    return {
      ...state,
      arrowHeight: action.arrowHeight
    };
  default:
    return state;
  }
}

export default reducer;
