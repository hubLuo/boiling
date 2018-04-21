/**
 * Created by Derry on 2018/3/28.
 */
import React, { Component } from 'react';
import TemperatureInput from './temperatrueInput';
import BoilingVerdict from './boilingVerdict';
import {createStore,applyMiddleware,compose} from "redux";
import {tempChange,tempCHANGE,tempCHANGEAsync} from "../../redux/index.redux";
import thunk from "redux-thunk";

const store=window.devToolsExtension?createStore(tempChange,compose(applyMiddleware(thunk),
    window.devToolsExtension
)):createStore(tempChange,applyMiddleware(thunk));

class Calculator extends Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(){
        console.log("calculator更新");
        return true;
    }
    render() {

        return (
            <div>
                <TemperatureInput
                    scale="c"
                    store={store}
                    tempCHANGE={tempCHANGE}
                    tempCHANGEAsync={tempCHANGEAsync}
                />
                <TemperatureInput
                    scale="f"
                    store={store}
                    tempCHANGE={tempCHANGE}
                    tempCHANGEAsync={tempCHANGEAsync}
                />
                <BoilingVerdict
                    store={store}
                />
            </div>
        );
    }
}
export default Calculator;