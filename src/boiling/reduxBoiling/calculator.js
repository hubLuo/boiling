/**
 * Created by Derry on 2018/3/28.
 */
import React, { Component } from 'react';
import TemperatureInput from './temperatrueInput';
import BoilingVerdict from './boilingVerdict';
import {createStore} from "redux";
import {tempChange,tempCHANGE} from "../../redux/index.redux";

const store=createStore(tempChange);

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
                />
                <TemperatureInput
                    scale="f"
                    store={store}
                    tempCHANGE={tempCHANGE}
                />
                <BoilingVerdict
                    store={store}
                />
            </div>
        );
    }
}
export default Calculator;