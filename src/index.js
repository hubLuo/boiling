import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';//用于Todo
import ReactBoiling from "./boiling/reactBoiling/calculator";
import EventBoiling from "./boiling/eventBoiling/calculator";
import FluxBoiling from "./boiling/fluxBoiling/calculator";
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<ReactBoiling />, document.getElementById('root'));
//ReactDOM.render(<EventBoiling />, document.getElementById('root'));
ReactDOM.render(<FluxBoiling />, document.getElementById('root'));
registerServiceWorker();
