/**
 * Created by Derry on 2018/3/28.
 */
import React, { Component } from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        //this.props.onTemperatureChange(e.target.value);
        console.log("正在输入的Input：",this.props.scale)
        this.props.eventEmitter.emit("temp change",{scale:this.props.scale,temp:e.target.value});
    }
    shouldComponentUpdate(){
        console.log("temperature更新",this.props.scale);
        return true;
    }
    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                       onChange={this.handleChange} />
            </fieldset>
        );
    }
}

export default TemperatureInput