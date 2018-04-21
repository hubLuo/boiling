/**
 * Created by Derry on 2018/3/28.
 */
import React, { Component } from 'react';
import {tempCHANGE,tempCHANGEAsync} from "../../redux/index.redux";
import {connect} from "react-redux";

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends Component {
    constructor(props) {
        super(props);
 /*       this.state={
            temperature:""
        };*/
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        //this.props.onTemperatureChange(e.target.value);
        console.log("正在输入的Input：",this.props.scale);
        const scale = this.props.scale;
        const val=e.target.value;
        const celsius = scale === 'f' ? tryConvert(val, toCelsius) : val;
        //this.props.eventEmitter.emit("temp change",{scale,temp:celsius});
        /* scale === 'f' ?
            this.props.store.dispatch(this.props.tempCHANGE({scale,temp:celsius})):
            this.props.store.dispatch(this.props.tempCHANGEAsync({scale,temp:celsius}));
        //触发渲染自己
      this.setState({
            temperature:val
        });*/
        scale === 'f' ?
            this.props.tempCHANGE({scale,temp:celsius}):
            this.props.tempCHANGEAsync({scale,temp:celsius});
    }
    componentDidMount(){
        //这里监听这个事件，目的是为里触发其他输入框的渲染
     /*   this.props.eventEmitter.on("temp change",(obj)=>{
            if(obj.scale!==this.props.scale){
                //触发渲染其他input
                this.setState({
                    temperature:this.props.scale=="f"?tryConvert(obj.temp, toFahrenheit):obj.temp
                });
            }
        });*/
      /*  this.props.store.subscribe(()=>{
            const obj=this.props.store.getState();
            if(obj.scale!==this.props.scale){
                //触发渲染其他input
                this.setState({
                    temperature:this.props.scale=="f"?tryConvert(obj.temp, toFahrenheit):obj.temp
                });
            }
        });*/
    }
    shouldComponentUpdate(){
        console.log("temperature更新",this.props.scale);
        return true;
    }
    componentWillReceiveProps(newProps){
        console.log(this.props.scale,"temp---WillReceiveProps");
    }
    render() {
        const temperature = this.props.temperature;
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

const mapStateToProps=(state,ownProps)=>{
    //ownProps就是this.props，当前状态值为参数state
    const obj=state;
    if(obj.scale!==ownProps.scale){
        let temp={
            temperature:ownProps.scale=="f"?tryConvert(obj.temp, toFahrenheit):obj.temp
        };
       return temp;
    }
};
const mapActionToProps={tempCHANGE,tempCHANGEAsync};
//使用装饰器，对TemperatureInput进行属性装饰得到新的Temp组件
/*
Connect 就负责让子组件能够使用store和action。Connect方法接收两个参数第一需要的显示props，第二个参数需要的action.
*/
TemperatureInput=connect(mapStateToProps,mapActionToProps)(TemperatureInput);//可以理解为将mapStateToProps，和 mapActionToProps 映射成为 TemperatureInput 属性
export default TemperatureInput