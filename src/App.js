import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ArrowPlaceholders from './components/ArrowPlaceholders';
import SongSheet from './components/SongSheet';
import * as actions from './actions';

import Song from './songs/A/A.mp3';

class App extends Component {
  constructor() {
    super();

    this.handlePlay = () => {
      // setTimeout(() => this.animateSongSheet(), parseInt(this.props.currentSong.offset, 10));
      this.animateSongSheet();
      this.props.setSongStartTime(performance.now());
    };
  }

  componentDidMount() {
    const placeholderDiv = document.querySelector('#arrow-placeholder-container');
    const placeholderHeight = placeholderDiv.scrollHeight;
    this.props.setArrowHeight(placeholderHeight);


    const audio = document.querySelector('audio');
    audio.play();
  }

  animatePlaceholder() {

  }

  animateSongSheet() {
    const noteData = this.props.currentSong.notes[0].noteData;
    const offset = parseInt(this.props.currentSong.offset, 10);
    const bpm = parseInt(this.props.currentSong.bpms['0'], 10);

    const beats = noteData.length * 4;
    const duration = offset + ((beats / bpm) * 60000);

    const arrowRow = document.querySelector('.arrow-row');
    const rowHeight = arrowRow.scrollHeight;

    const beginTransform = rowHeight * -1;
    const endTransform = beginTransform + (beginTransform * (beats - 1));

    const songScroll = [
      { transform: `translateY(${beginTransform}px)` },
      { transform: `translateY(${endTransform}px)` }
    ];

    const songScrollTiming = {
      delay: offset,
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
        <SongSheet />
        <audio onPlay={this.handlePlay}>
          <source src={Song} type="audio/mpeg" />
        </audio>
      </div>
    );
  }
}

App.propTypes = {
  currentSong: PropTypes.object,
  handlePlay: PropTypes.func,
  setSongStartTime: PropTypes.func,
  setArrowHeight: PropTypes.func
};

const mapStateToProps = state => ({
  currentSong: state.currentSong,
});

export default connect(mapStateToProps, actions)(App);
