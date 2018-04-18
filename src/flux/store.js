const EventEmitter=require("events").EventEmitter;
class Store extends EventEmitter{
    constructor(){
        super();
        this._data={};
    }

    _add(item){
        this._data["temp change"]=item;
        this.emit("temp change",this._data);
    }
    get data() {
        return this._data;
    }
}
export default Store;