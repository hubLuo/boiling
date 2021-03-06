//const storeid=Symbol("store");
//const EventEmitter=require("events").EventEmitter;
import Dispatcher from "./dispatcher";
import WebAPI from "./WebAPI";
class Actions{
/*    constructor(store){
        //this[store]能确保是独一无二的
        this[storeid]=store;
    }*/
    add(data){
        //this[storeid]._add(data);
        var actions={
            actionType:"add",
            data
        };
        //this.emit("call",actions);
        Dispatcher.dispatch(actions);
    };
    // 数据的来源是网络请求得到的。
    getAll(){
        WebAPI.getAll(function(data){
            var actions={
                actionType:"getAll",
                data
            };
            //this.emit("call",actions);
            Dispatcher.dispatch(actions);
        });
    };

}

export default Actions;
