import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import './components/header.css';
import './components/App.css';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
