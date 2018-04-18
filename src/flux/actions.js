const storeid=Symbol("store");
class Actions{
    constructor(store){
        //this[store]能确保是独一无二的
        this[storeid]=store;
    }
    add(data){
        this[storeid]._add(data);
    }
}

export default Actions;
