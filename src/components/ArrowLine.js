import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Arrow from './Arrow';

class ArrowLine extends React.Component {
  render() {
    // console.log(this.props.noteValue);
    // console.log(this.props.arrowLine);
    // console.log(this.props.beatsElapsed);

    const timingClassName = () => {
      switch (this.props.noteValue) {
      case 4:
        return 'arrow-div-quarter';
      case 8:
        return 'arrow-div-eighth';
      default:
        return 'arrow-div-quarter';
      }
    };

    const visibility = this.props.triggerable ?
      'hidden' :
      'visible';

    return (
      <div className={`arrow-row ${timingClassName()}`} width="100%">
        <div className="arrow-div-left">
          {this.props.arrowLine[0] === '1' ?
            <Arrow direction='left' noteValue={this.props.noteValue} visibility={visibility} /> :
            null
          }
        </div>
        <div>
          {this.props.arrowLine[1] === '1' ?
            <Arrow direction='down' noteValue={this.props.noteValue} visibility={visibility} /> :
            null
          }
        </div>
        <div>
          {this.props.arrowLine[2] === '1' ?
            <Arrow direction='up' noteValue={this.props.noteValue} visibility={visibility} /> :
            null
          }
        </div>
        <div  >
          {this.props.arrowLine[3] === '1' ?
            <Arrow direction='right' noteValue={this.props.noteValue} visibility={visibility} /> :
            null
          }
        </div>
      </div>
    );
  }
}

ArrowLine.propTypes = {
  arrowLine: PropTypes.string.isRequired,
  noteValue: PropTypes.number.isRequired,
  triggerable: PropTypes.bool
};

const mapStateToProps = (state, ownProps) => {
  return {
    currentSong: state.currentSong,
    songStartTime: state.songStartTime,
    triggerable: Math.abs(state.currentTime - ownProps.triggerTime) < 16.7
  };
};

export default connect(mapStateToProps)(ArrowLine);
