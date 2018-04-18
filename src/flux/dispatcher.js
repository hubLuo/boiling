const storeCallBackList=[];

/*
 dispatcher
 1、让store与action解耦。
 2、让组件消除了对于actions的单例的依赖（不再需要props属性传递actions），变为子组件（temperature）内部定义使用。
 3、作为中间件来处理筛选等工作
 * */
const Dispatcher={
    register(storeCallBack){
        storeCallBackList.push(storeCallBack);
    },
    dispatch(actions){
        for(let storeCallBack of storeCallBackList){
            storeCallBack(actions);
        }
    }
};
export default Dispatcher;