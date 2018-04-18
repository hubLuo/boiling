/**
 * Created by Derry on 2018/3/28.
 */

import React from 'react';
/*方法型组件，其特点为无状态*/
//不用 props，使用emit发射的内容 使用状态
class BoilingVerdict extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isboil:"水未烧开"
        }

    };

    componentDidMount(){
        this.props.eventEmitter.on("temp change",(obj)=>{
            var res=this.state.isboil;
            obj.temp>=100?res="水烧开了":res="水没有烧开";
            this.setState({isboil:res});
        });
    };

    render(){
        return <p>{this.state.isboil}</p>
    };
}


export default BoilingVerdict