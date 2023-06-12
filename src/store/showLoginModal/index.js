export default{
    namespaced:true,
    state:{
        isShowLoginModal:true
    },
    mutations:{
        chanIsShowLoginModal(state,payload){
            state.isShowLoginModal = payload
        }
    },
    actions:{

    },
}