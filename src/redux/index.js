import {createStore} from "redux";
// 新创建reducer
function inputChange(state=10,action){
    switch(action.type){
        case "add":
            return state + 1;
            break;
        case "sub":
            return state - 1;
            break;
        default:
            return state;
            break;
    }
}
const store=createStore(inputChange);

const init = store.getState();
console.log(init);

function listen(){
    const current=store.getState();
    console.log(`当前数据：${current}`);
    //console.log("当前数据---",current);
}
store.subscribe(listen);

store.dispatch({
    type: 'add'
});
//console.log(store.getState());

store.dispatch({
    type: 'add'
});
//console.log(store.getState());

store.dispatch({
    type: 'sub'
});
//console.log(store.getState());