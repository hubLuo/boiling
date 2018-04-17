/**
 * Created by Derry on 2018/3/28.
 */
import React, { Component } from 'react';
import TemperatureInput from './temperatrueInput';
import BoilingVerdict from './boilingVerdict'
/*
状态提升思路
* 每个组件的state是自己特有的，不能传递给其他组件，其他组件也无法更改。但是我们可以把input中值的显示控制权交给input的父组件，即把用户输入的数值通过props传递给它的父亲组件，在更新父组件的状态后，把这个值再传递给input，做个显示就可以了。
*
* 子组件通过props传递过去3个属性
*   分别是父组件状态值，scale比例，temperature温度值，以及父组件calculator中控制状态变化的方法
*   子组件的input触发onChange事件时，将会调用父组件方法来改变父组件状态值，引起父组件重新渲染，并把改变的状态重新props传递回子组件，并显示在子组件上
* */
class Calculator extends Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
    }

    handleCelsiusChange(temperature) {
        console.log("改变父类状态，达到跟新子类目的", this);
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature) {
        console.log("改变父类状态，达到跟新子类目的", this);
        this.setState({scale: 'f', temperature});
    }

    componentDidMount(){
        //渲染完成后相应操作，如发请求等
        /* F------*/
        console.log("5---componentDidMount---Calculator");

    };

    shouldComponentUpdate(nextProps, nextState){
        console.log("Calculator更新");
        console.log(nextProps, nextState);
        return true;
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange} />
                <BoilingVerdict
                    celsius={parseFloat(celsius)} />
            </div>
        );
    }
}

// 华氏温度转摄氏温度
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// 摄氏温度转华氏温度
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// 温度的数字化操作。
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

export default Calculator