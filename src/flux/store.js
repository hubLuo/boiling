import Dispatcher from "./dispatcher";
const EventEmitter=require("events").EventEmitter;

class Store extends EventEmitter{
    constructor(){
        super();
        this._data={};
 /*       //介于_add是个私有方法，所以应该放回到store中自己执行，而不应在Actions中使用
        //思路：将Actions放入Store中，并Actions监听自身方法的执行。
        actions.on("call",actions=>{
            switch(actions.actionType){
                case "add":
                    this._add(actions.data);
                    break;
                default:
                    break;
            }
        });*/
        // 无论是最先的为了使用_add方法而向Actions中传入Store,
        // 还是为了在store中使用自己的方法_add而向Store中传Actions，
        // 它们都存在一个强耦合的情况，即书写的位置，顺序是不能颠倒，不能或缺的，这样显然不方便开发。
        // 使用一个单例的dispatcher分发者来解耦合，并可以做些中间件处理筛选等工作。
        Dispatcher.register(actions=>{
            switch(actions.actionType){
                case "add":
                    this._add(actions.data);
                    break;
                default:
                    break;
            }
        });
    }

    _add(item){
        this._data["temp change"]=item;
        //注意this.data是获取私有属性this._data的方法
        this.emit("temp change",this.data);
    }
    //get 方式强调了data方法只能读取不能改写。而set方法强调了可以改写
    //get set是ES6中2个钩子
    get data() {
        return this._data;
    }
}
export default Store;