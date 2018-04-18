/**
 * Created by Derry on 2018/3/28.
 */
import React, { Component } from 'react';
import Actions from "../../flux/actions";

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.state={
            temperature:""
        };
        this.handleChange = this.handleChange.bind(this);
        this.actions=new Actions();
    }

    handleChange(e) {
        //this.props.onTemperatureChange(e.target.value);
        console.log("正在输入的Input：",this.props.scale);
        const scale = this.props.scale;
        const val=e.target.value;
        const celsius = scale === 'f' ? tryConvert(val, toCelsius) : val;
        //this.props.store._add({scale,temp:celsius});
        this.actions.add({scale,temp:celsius});
        //触发渲染自己
        this.setState({
            temperature:val
        });
    }
    componentDidMount(){
        //这里监听这个事件，目的是为里触发其他输入框的渲染
        this.props.store.on("temp change",(obj)=>{
            var obj=obj["temp change"];
            if(obj.scale!==this.props.scale){
                //触发渲染其他input
                this.setState({
                    temperature:this.props.scale=="f"?tryConvert(obj.temp, toFahrenheit):obj.temp
                });
            }
        });
    }
    shouldComponentUpdate(){
        console.log("temperature更新",this.props.scale);
        return true;
    }
    render() {
        const temperature = this.state.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in <span style={{fontWeight:"bold",color:"red"}}>{scaleNames[scale]}</span>:</legend>
                <input value={temperature}
                       onChange={this.handleChange} />
            </fieldset>
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

export default TemperatureInput