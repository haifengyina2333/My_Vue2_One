export default{
    namespaced:true,
    state:{
        isShowLoginModal:false
    },
    mutations:{
        chanIsShowLoginModal(state,payload){
            state.isShowLoginModal = payload
        }
    },
    actions:{

    },
}