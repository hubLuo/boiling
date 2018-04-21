/**
 * Created by Derry on 2018/3/28.
 */
import React, { Component } from 'react';
import TemperatureInput from './temperatrueInput';
import BoilingVerdict from './boilingVerdict';
//calculator组件变为一个dumb组件
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
                />
                <TemperatureInput
                    scale="f"
                />
                <BoilingVerdict />
            </div>
        );
    }
}
export default Calculator;