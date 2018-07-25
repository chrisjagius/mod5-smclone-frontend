import React from 'react';
import PropTypes from 'prop-types';

const Arrow = (props) => {
  const directionClass = `arrow-${props.direction}`;

  const fillColor = () => {
    switch (props.noteValue) {
    case 4:
      return '#ff0000';
    case 8:
      return '#0000ff';
    default:
      return '#ff0000';
    }
  };

  return (
    <svg className={directionClass} version="1.1" viewBox="0.0 0.0 512.0 512.0" fill="none" stroke="none" strokeLinecap="square" strokeMiterlimit="10">
      <clipPath id="p.0"><path d="m0 0l512.0 0l0 512.0l-512.0 0l0 -512.0z" clipRule="nonzero"/></clipPath>
      <g clipPath="url(#p.0)">
        <path fill="#000000" fillOpacity="0.0" d="m0 0l512.0 0l0 512.0l-512.0 0z" fillRule="evenodd"/>
        <path className="arrow-placeholder-part" fill={fillColor()} d="m-0.8849273 199.61848l256.44864 312.3886l256.4486 -312.3886z" fillRule="evenodd"/>
        <path className="arrow-placeholder-part" fill={fillColor()} d="m329.29996 -0.0074926508l-147.47281 0l0 0c-9.066376 0 -17.761429 3.601609 -24.172348 10.012515c-6.410904 6.410904 -10.012512 15.105959 -10.012512 24.172346l0 170.92021c0 9.918213E-4 8.087158E-4 0.0018005371 0.0018005371 0.0018005371l215.84071 -0.0018005371l0 0c0.0010070801 0 0.0018005371 -8.087158E-4 0.0018005371 -0.0018005371l-0.0018005371 -170.91841l0 0c0 -18.879776 -15.305084 -34.18486 -34.184845 -34.18486z" fillRule="evenodd"/>
      </g>
    </svg>
  );
};

Arrow.propTypes = {
  direction: PropTypes.string,
  noteValue: PropTypes.number
};

export default Arrow;
