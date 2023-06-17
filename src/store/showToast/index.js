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

    },
}