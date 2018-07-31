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

  buildLine(arrowLine, noteValue, totalBeatsElapsed) {
    return (
      <ArrowLine arrowLine={arrowLine} noteValue={noteValue} beatsElapsed={totalBeatsElapsed} />
    );
  }

  buildMeasure(measure, measureBeatsElapsed) {
    const timeDivision = measure.length;

    return measure.map((arrowLine, idx) => {
      const noteValue = this.getNoteValue(this.reduceDenominator(idx, timeDivision));
      const currentMeasureBeatsElapsed = (4 / timeDivision) * idx;
      const totalBeatsElapsed = measureBeatsElapsed + currentMeasureBeatsElapsed;

      return this.buildLine(arrowLine, noteValue, totalBeatsElapsed);
    });
  }

  buildSongSheet() {
    const noteData = this.props.songData.notes[0].noteData;

    return noteData.map((measure, idx) => {
      const measureBeatsElapsed = idx * 4;

      return this.buildMeasure(measure, measureBeatsElapsed);
    });
  }

  render() {
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
