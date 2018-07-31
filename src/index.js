import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import App from './App';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

(() => {
  function update(tFrame) {
    return { type: 'UPDATE_TIME', currentTime: tFrame };
  }

  function main(tFrame) {
    App.stopMain = window.requestAnimationFrame(main);

    store.dispatch(update(tFrame)); //Call your update method. In our case, we give it rAF's timestamp.
  }

  main(); // Start the cycle
})();

registerServiceWorker();
