import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ArrowPlaceholders from './components/ArrowPlaceholders';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ArrowPlaceholders />
      </div>
    );
  }
}

App.propTypes = {
  message: PropTypes.string.isRequired,
};

export default App;
