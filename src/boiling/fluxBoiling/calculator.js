/**
 * Created by Derry on 2018/3/28.
 */
import React, { Component } from 'react';
import TemperatureInput from './temperatrueInput';
import BoilingVerdict from './boilingVerdict';
//EventEmitter是观察者模式的一种
//const EventEmitter =require("events").EventEmitter;
const EventEmitter=function(){
    this._events={};
};
EventEmitter.prototype={
    constructor:EventEmitter,
    on:function(event,fn){
        if(!this._events[event]){
            this._events[event]=[];
        }
        this._events[event].push(fn);
    },
    emit:function(event,data){
        if(!this._events[event]){
            return false;
        }
        for(var i=0;i<this._events[event].length;i++){
            this._events[event][i](data);
        }
    }
};
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