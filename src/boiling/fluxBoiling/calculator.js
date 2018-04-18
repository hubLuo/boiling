/**
 * Created by Derry on 2018/3/28.
 */
import React, { Component } from 'react';
import TemperatureInput from './temperatrueInput';
import BoilingVerdict from './boilingVerdict';
import Store from "../../flux/store";
var store =new Store();
class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {temperature: '', scale: 'c'};
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
                    store={store} />
                <TemperatureInput
                    scale="f"
                    store={store} />
                <BoilingVerdict
                    store={store} />
            </div>
        );
    }
}
export default Calculator;