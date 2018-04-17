/**
 * Created by Derry on 2018/3/28.
 */
import React, { Component } from 'react';
import TemperatureInput from './temperatrueInput';
import BoilingVerdict from './boilingVerdict';

const EventEmitter =require("events").EventEmitter;
/*
* 使calculator组件只是作为一个架构层，所有的功能实现都放在了实际的子组件中去是现实，
* 这样每个组件的渲染，只需要控制自己的state，而不再依赖一个提升了的公共的状态，来控制渲染。
* 从此，每个组件都可以独立的存在，可以按需组合。
*
* 根据以上的思路，公共状态的属性有2个temperature,和onTemperatureChange,
* 实际控制渲染的状态值是temperature, 而属性onTemperatureChange是将父组件状态控制权，交给了子组件。
* 而属性scale并不是决定组件是否渲染，只是父组件架构中的一个标识属性。
 *  */
class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {temperature: '', scale: 'c'};
        this.emitter=new EventEmitter();
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
                    eventEmitter={this.emitter} />
                <TemperatureInput
                    scale="f"
                    eventEmitter={this.emitter} />
                <BoilingVerdict
                    eventEmitter={this.emitter} />
            </div>
        );
    }
}
export default Calculator;