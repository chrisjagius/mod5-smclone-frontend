import React from 'react';
import PropTypes from 'prop-types';

import Arrow from './Arrow';

class ArrowLine extends React.Component {
  render() {
    console.log(this.props.noteValue);
    console.log(this.props.arrowLine);

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

    return (
      <div className={`arrow-row ${timingClassName()}`} width="100%">
        <div className="arrow-div-left">
          {this.props.arrowLine[0] === '1' ?
            <Arrow direction='left' noteValue={this.props.noteValue} /> :
            null
          }
        </div>
        <div>
          {this.props.arrowLine[1] === '1' ?
            <Arrow direction='down' noteValue={this.props.noteValue} /> :
            null
          }
        </div>
        <div>
          {this.props.arrowLine[2] === '1' ?
            <Arrow direction='up' noteValue={this.props.noteValue} /> :
            null
          }
        </div>
        <div>
          {this.props.arrowLine[3] === '1' ?
            <Arrow direction='right' noteValue={this.props.noteValue} /> :
            null
          }
        </div>
      </div>
    );
  }
}

ArrowLine.propTypes = {
  arrowLine: PropTypes.array.isRequired,
  noteValue: PropTypes.number.isRequired
};

export default ArrowLine;
