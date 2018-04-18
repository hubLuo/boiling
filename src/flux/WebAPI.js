const WebAPI={
    getAll(fn){
        // 模拟网络请求。
        setTimeout(function(){
            let data={scale: 'f', temp: 99};
            fn(data);
        },2000);
    }
}
export default WebAPI;
