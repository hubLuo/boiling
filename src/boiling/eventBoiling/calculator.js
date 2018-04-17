/**
 * Created by Derry on 2018/3/28.
 */
import React, { Component } from 'react';
import TemperatureInput from './temperatrueInput';
import BoilingVerdict from './boilingVerdict';

const EventEmitter =require("events").EventEmitter;
var emitter= new EventEmitter();
/*
* 1.根据事件源来确定事件总线，本例中只有一个input的onChange事件
* 2.把父组件calculator中交互的代码移除，之前在状态提升中，是因为父组件状态state改变,必须要在父组件中进行。所以方法只能定义在父组件中。
* 3.广播，发射器，观察者模式有什么不同
*   广播----指的是向所有人，持续放射消息，并且跨项目跨进程的，所以是个进程服务。
*   发射器----是消息放射是点对点，消息的响应也是点对点的，并且需要对应触发（在一个事件总线范围内）
*   观察者模式----消息的订阅是点对多个，消息的响应是轮询调用的（现实中如同微博）
 *  */
class Calculator extends Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c',name:"everyOne"};
    }

    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }

    componentDidMount(){
        emitter.on("test event", ()=>{
            this.setState({
                name:"luoqi"
            });
        });
    };

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                {this.state.name}
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
setTimeout(function(){
    emitter.emit("test event");
},3000);
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

export default Calculator;