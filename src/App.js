import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ArrowPlaceholders from './components/ArrowPlaceholders';
import SongSheet from './components/SongSheet';

import Song from './songs/A/A.mp3';

class App extends Component {
  constructor() {
    super();

    this.state = {
      songStartTime: 0,
      arrowHeight: 100
    };

    this.handlePlay = () => {
      setTimeout(() => this.animateSongSheet(), parseInt(this.props.currentSong.offset, 10));

      this.setState((prevState) => {
        return {
          ...prevState,
          songStartTime: performance.now()
        };
      });
    };
  }

  componentDidMount() {
    const placeholderDiv = document.querySelector('#arrow-placeholder-container');
    const placeholderHeight = placeholderDiv.scrollHeight;


    const audio = document.querySelector('audio');
    audio.play();
  }

  animatePlaceholder() {

  }

  animateSongSheet() {
    const beats = this.props.currentSong.notes[0].noteData.length * 4;
    const duration = parseInt(this.props.currentSong.offset, 10) + ((beats / parseInt(this.props.currentSong.bpms['0'], 10)) * 60000);

    const arrowRow = document.querySelector('.arrow-row');
    const rowHeight = arrowRow.scrollHeight;

    const beginTransform = rowHeight * -1;
    const endTransform = beginTransform + (beginTransform * (beats - 1));

    const songScroll = [
      { transform: `translateY(${beginTransform}px)` },
      { transform: `translateY(${endTransform}px)` }
    ];

    const songScrollTiming = {
      duration: duration,
      fill: 'forwards'
    };

    const songSheetDiv = document.querySelector('.song-sheet');

    songSheetDiv.animate(songScroll, songScrollTiming);
  }

  render() {
    return (
      <div className="App">
        <ArrowPlaceholders />
        <SongSheet songData={this.props.currentSong} />
        <audio onPlay={this.handlePlay}>
          <source src={Song} type="audio/mpeg" />
        </audio>
      </div>
    );
  }
}

App.propTypes = {
  currentSong: PropTypes.object
};

export default App;
