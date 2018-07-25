import React from 'react';
import PropTypes from 'prop-types';

class SongSheet extends React.Component {
  parseMeasure() {
    const noteData = this.props.songData.notes[0].noteData;

    noteData.map(measure => {
      console.log(measure.length);
    });
  }

  buildSongSheet() {

  }

  render() {
    console.log(this.props.songData);
    return (
      <div className='song-sheet'>
        {this.buildSongSheet()}
      </div>
    );
  }
}

SongSheet.propTypes = {
  songData: PropTypes.object
};

export default SongSheet;
