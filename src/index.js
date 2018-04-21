import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';//用于Todo
import ReactBoiling from "./boiling/reactBoiling/calculator";
import EventBoiling from "./boiling/eventBoiling/calculator";
import FluxBoiling from "./boiling/fluxBoiling/calculator";
import registerServiceWorker from './registerServiceWorker';
//redux核心使用演示
import "./redux/index";
//redux修改boiling代码
import ReduxBoiling from "./boiling/reduxBoiling/calculator";

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<ReactBoiling />, document.getElementById('root'));
//ReactDOM.render(<EventBoiling />, document.getElementById('root'));
//ReactDOM.render(<FluxBoiling />, document.getElementById('root'));
ReactDOM.render(<ReduxBoiling />, document.getElementById('root'));
registerServiceWorker();
