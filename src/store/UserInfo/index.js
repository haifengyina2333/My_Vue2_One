import { UserProfilesAPI } from "../../request/api"
export default {
    namespaced: true,
    state: {
        cartTotal: 0,
        userInfo: {
            nickName: "游客",
            coin: 0,
            // 图片路径当成模块来使用
            headImg: require("../../assets/img/logo.jpg")
        }
    },
    mutations: {
        chanUserInfo(state, payload) {
            state.cartTotal = payload.cartTotal;
            state.userInfo = payload.userInfo;
        },
        initUserInfo(state) {
            state.cartTotal = 0,
                state.userInfo = {
                    nickName: "游客",
                    coin: 0,
                    headImg: require("../../assets/img/logo.jpg")
                }
        }
    },
    actions: {
        async asyncChanUserInfo(context) {
            let UserInfores = await UserProfilesAPI();
            console.log("用户数据更新---Vuex发送的ajax请求，每次路由更新时触发，在TopBat组件中调用",UserInfores);
            context.commit("chanUserInfo", UserInfores.data)
        }
    },
}