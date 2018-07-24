import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ArrowPlaceholders from './components/ArrowPlaceholders';
import Song from './songs/A/A.mp3';
import SongJSON from './songs/A/A.ref.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ArrowPlaceholders />
        <audio controls autoPlay>
          <source src={Song} type="audio/mpeg" />
        </audio>
      </div>
    );
  }
}

App.propTypes = {
  message: PropTypes.string.isRequired,
};

export default App;
