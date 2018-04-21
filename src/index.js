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
import {createStore,applyMiddleware,compose} from "redux";
import {tempChange} from "./redux/index.redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import ReduxBoiling from "./boiling/reduxBoiling/calculator";

const store=window.devToolsExtension?createStore(tempChange,compose(applyMiddleware(thunk),
    window.devToolsExtension
)):createStore(tempChange,applyMiddleware(thunk));

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<ReactBoiling />, document.getElementById('root'));
//ReactDOM.render(<EventBoiling />, document.getElementById('root'));
//ReactDOM.render(<FluxBoiling />, document.getElementById('root'));
//ReactDOM.render(<ReduxBoiling />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
        <ReduxBoiling />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
