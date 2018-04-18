const storeCallBackList=[];
const middleWareList=[];
/*
 dispatcher
 1、让store与action解耦。
 2、让组件消除了对于actions的单例的依赖（不再需要props属性传递actions），变为子组件（temperature）内部定义使用。
 3、作为中间件来处理筛选等工作
 * */
const Dispatcher={
    //注册store执行函数
    register(storeCallBack){
        storeCallBackList.push(storeCallBack);
    },
    //注册中间件执行函数
    use(middleWare){
        middleWareList.push(middleWare);
    },
    //作为中间件筛选过度方法，封装原先dispatch---这也是中间件的工作原理
    dispatch(actions){
        let that=this,num=-1;
        function next(){
            let fn=middleWareList[++num];
            //fn?fn(actions,next):that._dispatch(actions);
            if(fn){
                fn(actions,next);
                //这里之所以把next作为fn参数返回,而不是直接递归执行完全，主要出于2点考虑
                //1：fn的执行很可能是异步的    2：将next的控制权交回给用户。
                //这样处理也有坏处，那就是在中间件函数中必须要写next,否则就没法执行最后的_dispatch
                //next();
            }else{
                that._dispatch(actions);
            }
        }
        next();
    },
    _dispatch(actions){
        for(let storeCallBack of storeCallBackList){
            storeCallBack(actions);
        }
    }

};
export default Dispatcher;