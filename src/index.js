import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import './Styles/Modal.css';
import './Styles/Button.css';
import './Styles/Utils.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faBars,
  faAngleDoubleDown
    } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch);
library.add(faBars);
library.add(faAngleDoubleDown);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
