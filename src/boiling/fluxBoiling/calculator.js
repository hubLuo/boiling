/**
 * Created by Derry on 2018/3/28.
 */
import React, { Component } from 'react';
import TemperatureInput from './temperatrueInput';
import BoilingVerdict from './boilingVerdict';
import Store from "../../flux/store";
import Actions from "../../flux/actions";
var store =new Store();
var actions=new Actions(store);
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
                    store={store}
                    actions={actions}
                />
                <TemperatureInput
                    scale="f"
                    store={store}
                    actions={actions}
                />
                <BoilingVerdict
                    store={store} />
            </div>
        );
    }
}
export default Calculator;