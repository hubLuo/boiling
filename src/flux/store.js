const EventEmitter=require("events").EventEmitter;
class Store extends EventEmitter{
    constructor(actions){
        super();
        this._data={};
        //介于_add是个私有方法，所以应该放回到store中自己执行，而不是在Actions中使用
        //思路：将Actions放入Store中，并Actions监听自身方法的执行。
        actions.on("call",actions=>{
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