export default{
    namespaced:true,
    state:{
        isLogined:localStorage.getItem("x-auth-token")?true:false
    },
    mutations:{
        chanIsLogined(state,payload){
            state.isLogined = payload
        }
    },
    actions:{

    },
}