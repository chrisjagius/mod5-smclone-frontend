import React, {Component} from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.message}</h1>
        <div id="arrow-placeholder-container" width = "100%" height = "400px">
          <div id="arrow-placeholder-div-left" width = "50%" height = "400px" styles="float:left">
            <svg id="arrow-placeholder-left" version="1.1" viewBox="0.0 0.0 512.0 512.0" fill="none" stroke="none" strokeLinecap="square" strokeMiterlimit="10">
              <clipPath id="p.0"><path d="m0 0l512.0 0l0 512.0l-512.0 0l0 -512.0z" clipRule="nonzero"/></clipPath>
              <g clipPath="url(#p.0)">
                <path fill="#000000" fillOpacity="0.0" d="m0 0l512.0 0l0 512.0l-512.0 0z" fillRule="evenodd"/>
                <path fill="#999999" d="m-0.8849273 199.61848l256.44864 312.3886l256.4486 -312.3886z" fillRule="evenodd"/>
                <path fill="#999999" d="m329.29996 -0.0074926508l-147.47281 0l0 0c-9.066376 0 -17.761429 3.601609 -24.172348 10.012515c-6.410904 6.410904 -10.012512 15.105959 -10.012512 24.172346l0 170.92021c0 9.918213E-4 8.087158E-4 0.0018005371 0.0018005371 0.0018005371l215.84071 -0.0018005371l0 0c0.0010070801 0 0.0018005371 -8.087158E-4 0.0018005371 -0.0018005371l-0.0018005371 -170.91841l0 0c0 -18.879776 -15.305084 -34.18486 -34.184845 -34.18486z" fillRule="evenodd"/>
              </g>
            </svg>
          </div>
          <div id="arrow-placeholder-div-down" width = "50%" height = "400px" styles="float:left">
            <svg id="arrow-placeholder-down" version="1.1" viewBox="0.0 0.0 512.0 512.0" fill="none" stroke="none" strokeLinecap="square" strokeMiterlimit="10">
              <clipPath id="p.0"><path d="m0 0l512.0 0l0 512.0l-512.0 0l0 -512.0z" clipRule="nonzero"/></clipPath>
              <g clipPath="url(#p.0)">
                <path fill="#000000" fillOpacity="0.0" d="m0 0l512.0 0l0 512.0l-512.0 0z" fillRule="evenodd"/>
                <path fill="#999999" d="m-0.8849273 199.61848l256.44864 312.3886l256.4486 -312.3886z" fillRule="evenodd"/>
                <path fill="#999999" d="m329.29996 -0.0074926508l-147.47281 0l0 0c-9.066376 0 -17.761429 3.601609 -24.172348 10.012515c-6.410904 6.410904 -10.012512 15.105959 -10.012512 24.172346l0 170.92021c0 9.918213E-4 8.087158E-4 0.0018005371 0.0018005371 0.0018005371l215.84071 -0.0018005371l0 0c0.0010070801 0 0.0018005371 -8.087158E-4 0.0018005371 -0.0018005371l-0.0018005371 -170.91841l0 0c0 -18.879776 -15.305084 -34.18486 -34.184845 -34.18486z" fillRule="evenodd"/>
              </g>
            </svg>
          </div>
          <div id="arrow-placeholder-div-up" width = "50%" height = "400px" styles="float:left">
            <svg id="arrow-placeholder-up" version="1.1" viewBox="0.0 0.0 512.0 512.0" fill="none" stroke="none" strokeLinecap="square" strokeMiterlimit="10">
              <clipPath id="p.0"><path d="m0 0l512.0 0l0 512.0l-512.0 0l0 -512.0z" clipRule="nonzero"/></clipPath>
              <g clipPath="url(#p.0)">
                <path fill="#000000" fillOpacity="0.0" d="m0 0l512.0 0l0 512.0l-512.0 0z" fillRule="evenodd"/>
                <path fill="#999999" d="m-0.8849273 199.61848l256.44864 312.3886l256.4486 -312.3886z" fillRule="evenodd"/>
                <path fill="#999999" d="m329.29996 -0.0074926508l-147.47281 0l0 0c-9.066376 0 -17.761429 3.601609 -24.172348 10.012515c-6.410904 6.410904 -10.012512 15.105959 -10.012512 24.172346l0 170.92021c0 9.918213E-4 8.087158E-4 0.0018005371 0.0018005371 0.0018005371l215.84071 -0.0018005371l0 0c0.0010070801 0 0.0018005371 -8.087158E-4 0.0018005371 -0.0018005371l-0.0018005371 -170.91841l0 0c0 -18.879776 -15.305084 -34.18486 -34.184845 -34.18486z" fillRule="evenodd"/>
              </g>
            </svg>
          </div>
          <div id="arrow-placeholder-div-right" width = "50%" height = "400px" styles="float:right">
            <svg id="arrow-placeholder-right" version="1.1" viewBox="0.0 0.0 512.0 512.0" fill="none" stroke="none" strokeLinecap="square" strokeMiterlimit="10">
              <clipPath id="p.0"><path d="m0 0l512.0 0l0 512.0l-512.0 0l0 -512.0z" clipRule="nonzero"/></clipPath>
              <g clipPath="url(#p.0)">
                <path fill="#000000" fillOpacity="0.0" d="m0 0l512.0 0l0 512.0l-512.0 0z" fillRule="evenodd"/>
                <path fill="#999999" d="m-0.8849273 199.61848l256.44864 312.3886l256.4486 -312.3886z" fillRule="evenodd"/>
                <path fill="#999999" d="m329.29996 -0.0074926508l-147.47281 0l0 0c-9.066376 0 -17.761429 3.601609 -24.172348 10.012515c-6.410904 6.410904 -10.012512 15.105959 -10.012512 24.172346l0 170.92021c0 9.918213E-4 8.087158E-4 0.0018005371 0.0018005371 0.0018005371l215.84071 -0.0018005371l0 0c0.0010070801 0 0.0018005371 -8.087158E-4 0.0018005371 -0.0018005371l-0.0018005371 -170.91841l0 0c0 -18.879776 -15.305084 -34.18486 -34.184845 -34.18486z" fillRule="evenodd"/>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  message: PropTypes.string.isRequired,
};

export default App;
