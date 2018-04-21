const TEMP_CHANGE="temp change";

//reducer：定义了store处理action数据格式的方式。
export function tempChange(state =" ",action){
    switch(action.type){
        case TEMP_CHANGE:
            return action.data;
            break;
        default:
            return state;
            break;

    }
}

//action creator,创建一个type属性的action数据格式
export function tempCHANGE(data){
    return {
        type:TEMP_CHANGE,
        data
    }
}