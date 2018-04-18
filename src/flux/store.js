const EventEmitter=require("events").EventEmitter;
class Store extends EventEmitter{
    constructor(){
        super();
        this._data={};
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