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
        this.props.onTemperatureChange(e.target.value);
    }
    componentDidMount(){
        //渲染完成后相应操作，如发请求等
        /* F------*/
        console.log("5---componentDidMount---TemperatrueInput");

    };
    shouldComponentUpdate(nextProps, nextState){
        console.log("TemperatrueInput更新");
        console.log(nextProps, nextState);
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