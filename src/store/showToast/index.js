export default{
    namespaced:true,
    state:{
        isShowToast:false,
        type:"",
        msg:"",
    },
    mutations:{
        chanIsShowToast(state,payload){
            state.isShowToast = payload.isShow;
            state.type = payload.type;
            state.msg = payload.msg;
           
        }
    },
    actions:{
        asynnChanIsShowToast(context,payload){
            // 展示
            context.commit("chanIsShowToast",{ 
                isShow:true,
                type:payload.type,
                msg:payload.msg});
            // 关闭
            setTimeout(()=>{
                context.commit("chanIsShowToast",{
                    isShow :false,
                    type:payload.type,
                    msg:payload.msg
                }); 
            },1500)
        }
    },
}