/**
 * Created by Derry on 2018/3/28.
 */
import React, { Component } from 'react';
import TemperatureInput from './temperatrueInput';
import BoilingVerdict from './boilingVerdict';
import Store from "../../flux/store";
import Dispatcher from "../../flux/dispatcher";
var store =new Store();
class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {temperature: '', scale: 'c'};
        Dispatcher.use(function log(actions,next){
            setTimeout(function(){
                console.log("中间件日志1--",actions.actionType);
                next();
            },2000);
        });
        Dispatcher.use(function log2(actions,next){
            setTimeout(function(){
                console.log("中间件日志2--",actions.actionType);
                next();
            },2000);
        });
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
                />
                <TemperatureInput
                    scale="f"
                    store={store}
                />
                <BoilingVerdict
                    store={store} />
            </div>
        );
    }
}
export default Calculator;