/**
 * Created by Derry on 2018/3/28.
 */

import React from 'react';
import {connect} from "react-redux";
/*方法型组件，其特点为无状态*/
//不用 props，使用emit发射的内容 使用状态
class BoilingVerdict extends React.Component{
    constructor(props){
        super(props);
    /*    this.state={
            isboil:"水未烧开"
        }*/

    };

    componentDidMount(){
      /*  this.props.eventEmitter.on("temp change",(obj)=>{
            var res=this.state.isboil;
            obj.temp>=100?res="水烧开了":res="水没有烧开";
            this.setState({isboil:res});
        });*/
   /*     this.props.store.subscribe(()=>{
            const obj=this.props.store.getState();
            var res=this.state.isboil;
            obj.temp>=100?res="水烧开了":res="水没有烧开";
            this.setState({isboil:res});
        });*/
    };
    render(){
        return <p>{this.props.isboil}</p>
    };
}
const mapStateToProps=(state,ownProps)=>{
    //ownProps就是this.props，当前状态值为参数state

    const obj=state;
    var res="水未烧开";
    obj.temp>=100?res="水烧开了":res="水没有烧开";
    return {isboil:res};

};

//使用装饰器，对TemperatureInput进行属性装饰
/*
 Connect 就负责让子组件能够使用store和action。Connect方法接收两个参数第一需要的显示props，第二个参数需要的action.
 */
BoilingVerdict=connect(mapStateToProps)(BoilingVerdict);//可以理解为将mapStateToProps映射成为 BoilingVerdict 属性

export default BoilingVerdict