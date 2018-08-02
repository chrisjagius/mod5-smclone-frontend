import SongJSON from '../songs/A/A.ref.json';

const initialState = {
  currentSong: SongJSON,
  currentTime: 0,
  songStartTime: 0,
  arrowHeight: 100,
  globalOffset: 1000
};

function reducer(state = initialState, action) {
  switch (action.type) {
  case 'UPDATE_TIME':
    return {
      ...state,
      currentTime: action.currentTime
    };
  case 'SET_SONG_START':
    console.log(action.songStartTime);

    return {
      ...state,
      songStartTime: action.songStartTime
    };
  case 'SET_ARROW_HEIGHT':
    return {
      ...state,
      arrowHeight: action.arrowHeight
    };
  default:
    return state;
  }
}

export default reducer;
