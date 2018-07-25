import React from 'react';
import PropTypes from 'prop-types';

import ArrowLine from './ArrowLine';

class SongSheet extends React.Component {
  reduceDenominator(numerator, denominator) {
    let gcd = function gcd(a,b){
      return b ? gcd(b, a%b) : a;
    };
    gcd = gcd(numerator,denominator);
    const reducedDenominator = denominator/gcd;
    return reducedDenominator;
  }

  getNoteValue(reducedDenom) {
    if (reducedDenom === 4 || reducedDenom === 2 || reducedDenom === 1) {
      return 4;
    } else {
      return reducedDenom;
    }
  }

  buildLine(arrowLine, noteValue) {
    return (
      <ArrowLine arrowLine={arrowLine} noteValue={noteValue} />
    );
  }

  buildMeasure(measure) {
    const timeDivision = measure.length;

    return measure.map((arrowLine, idx) => {
      const noteValue = this.getNoteValue(this.reduceDenominator(idx, timeDivision));

      return this.buildLine(arrowLine, noteValue);
    });
  }

  buildSongSheet() {
    const noteData = this.props.songData.notes[0].noteData;

    return noteData.map(measure => {
      return this.buildMeasure(measure);
    });
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
