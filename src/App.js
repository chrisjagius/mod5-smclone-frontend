import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ArrowPlaceholders from './components/ArrowPlaceholders';
import SongSheet from './components/SongSheet';

import Song from './songs/A/A.mp3';
import SongJSON from './songs/A/A.ref.json';

class App extends Component {
  componentDidMount() {
    const songScroll = [
      { transform: 'translateY(0px)' },
      { transform: 'translateY(-4192px)' }
    ];

    const songScrollTiming = {
      duration: 10500
    };

    const songSheetDiv = document.querySelector('.song-sheet');

    songSheetDiv.animate(songScroll, songScrollTiming);
  }

  render() {
    return (
      <div className="App">
        <ArrowPlaceholders />
        <SongSheet songData={SongJSON} />
        <audio autoPlay onPlay={() => console.log(performance.now())}>
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
