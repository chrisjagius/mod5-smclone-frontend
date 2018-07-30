import { connect } from 'react-redux';

import App from '../App';

const mapStateToProps = state => ({
  currentSong: state.currentSong,
});

const Game = connect(mapStateToProps)(App);

export default Game;
