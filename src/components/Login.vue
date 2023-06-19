<template>
    <!-- 全屏覆盖 -->
    <div class="login-modal" @click="">
        <div class="mask" @click="close"></div>
        <div class="login-box">
            <img class="close" src="../assets/img/close.png" alt="" @click="close">
            <ul class="title">
                <li :class="isShowForm ? 'active' : ''" @click="isShowForm = true">手机登录</li>
                <li style="margin: 0px 18px; cursor:none">|</li>
                <li :class="!isShowForm ? 'active' : ''" @click="toShowWeixin">微信登录</li>
            </ul>
            <div class="body">
                <div class="from" v-show="isShowForm">

                    <div class="input-gruop">
                        <input type="text" placeholder="请输入手机号" v-model="phoneNum" ref="phone">
                    </div>
                    <div class="input-gruop">
                        <slide-verify :l="42" :r="20" :w="360" :h="140" @success="onSuccess" @fail="onFail"
                            @refresh="onRefresh" :style="{ width: '100%' }" class="slide-box" ref="slideBlock"
                            :slider-text="msg"></slide-verify>
                    </div>
                    <div class="input-gruop">
                        <input type="text" class="code" placeholder="请输入短信验证码" v-model="SMScode">
                        <div class="btn" :class="isShowSMCode ? 'kill' : ''">
                            <span v-show="!isShowSMCode" @click="getSMcode
                            ">获取验证码</span>
                            <span v-show="isShowSMCode">{{ count }}s</span>
                        </div>
                    </div>
                    <div class="btn" @click="submitLogin">登录</div>
                </div>
                <div class="wx-qrcode" v-show="!isShowForm">
                    <div id="weixin" class="qrcode" v-show="!isShowForm">
                        ⼆维码
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
// import instance from '@/request/request';
import { validatePhoneNum } from '../util/index'
import { SendSMSAPI, PhoneLoginAPI, BindPhoneLoginAPI} from '../request/api';
export default {
    data() {
        return {
            isShowForm: true,
            msg: "向右滑动",
            // 手机号
            phoneNum: '18814433339',
            isShowSMCode: false,
            count: 60,
            SMScode: "233333",

        }
    },
    computed: {
        ...mapState({
            isShowToast: state => state.isShowToast.isShowToast
        })
    },
    methods: {
        ...mapMutations({
            chanIsShowLoginModal: "showLoginModal/chanIsShowLoginModal",
            chanIsLogined: "isLoginedStatus/chanIsLogined",

        }),
        ...mapActions({
            asynnChanIsShowToast: "isShowToast/asynnChanIsShowToast",
            asyncChanUserInfo:"UserInfo/asyncChanUserInfo"
        }),
        close() {
            this.chanIsShowLoginModal(false)
        },
        // 获取微信二维码
        toShowWeixin() {
            this.isShowForm = false;
            // 申请微信登录⼆维码
            let _this = this;

            new WxLogin({
                id: "weixin",
                appid: "wx67cfaf9e3ad31a0d", // 这个appid要填死
                scope: "snsapi_login",
                // 扫码成功后重定向的接⼝
                redirect_uri: "https://sc.wolfcode.cn/cms/wechatUsers/shop/PC",
                // state填写编码后的url
                state: encodeURIComponent(window.btoa("http://localhost:8080" +
                    _this.$route.path)),
                // 调⽤样式⽂件
                href: "data:text/css;base64,Lyogd3hsb2dpbi5jc3MgKi8NCi5pbXBvd2VyQm94IC50aXRsZSwgLmltcG93ZXJCb3ggLmluZm97DQogIGRpc3BsYXk6IG5vbmU7DQp9DQoNCi5pbXBvd2VyQm94IC5xcmNvZGV7DQogIG1hcmdpbi10b3A6IDIwcHg7DQogIHdpZHRoOiAyNTBweDsNCn0NCiN3eF9kZWZhdWx0X3RpcCBwOmxhc3QtY2hpbGR7DQogIGRpc3BsYXk6IG5vbmU7DQp9",
            });
        },

        // 拼图成功
        onSuccess(times) {
            let ms = (times / 1000).toFixed(1);
            this.msg = "login success, 耗时 " + ms + "s";
        },
        // 拼图失败
        onFail() {
            this.onRefresh(); // 重新刷新拼图
        },
        // 拼图刷新
        onRefresh() {
            this.msg = "再试⼀次";
        },
        // 登录按钮的代码
        async submitLogin() {
            // - 手机号码验证
            // - 图片验证码验证
            if (!this.virifyFn()) {
                return
            }

            let uuid = localStorage.getItem("uuid");
            let res = null;
            if(uuid){
                 res = await BindPhoneLoginAPI({
                    phone:this.phoneNum.trim(),
                    verifyCode:this.SMScode.trim(),
                    uuid:uuid
                })
            }else{
                 res = await PhoneLoginAPI({
                    phone:this.phoneNum.trim(),
                    verifyCode:this.SMScode.trim()
                })
            }
            console.log(res);
            if (!res)  return 
                // 1.提示登录成功
                this.asynnChanIsShowToast({
                    msg: "登录成功！",
                    type: "success"
                })
                // 2.关闭登录窗口
                this.close()
                // 3.保存token
                localStorage.setItem("x-auth-token", res["x-auth-token"])
                // 4.登录状态切换
                this.chanIsLogined(true);
                
                // 5.删除uuid,并且删除浏览器的code
                if(uuid){
                    localStorage.removeItem("uuid");
                    this.$router.push(this.$route.path)
                }
                // 登录成功之后,发送用户请求 封在Vuex里了
               this.asyncChanUserInfo();
            
        },
        // 短信验证码
        async getSMcode() {
            if (!this.virifyFn()) {
                return
            }
            // 3.发送验证码 --- axios 请求
            let res = await SendSMSAPI({
                phone: this.phoneNum.trim(),
            });
            if (res.code == 0) {
                console.log(res);
                this.isShowSMCode = true;
                this.countDown();
                this.asynnChanIsShowToast({
                    msg: "验证码已发送！",
                    type: "success"
                })
            }
        },
        // 倒计时代码
        countDown() {
            let timer = setInterval(() => {
                this.count--
                if (this.count == 0) {
                    clearInterval(timer);
                    this.isShowSMCode == false;
                    this.count = 60;
                }
            }, 1000)
        },
        // 手机号和图片验证码 验证
        virifyFn() {
            if (!validatePhoneNum(this.phoneNum)) {
                this.asynnChanIsShowToast({
                    msg: "请你输入正确的手机号！",
                    type: "danger"
                })
                // 聚焦用户鼠标焦点
                this.$refs.phone.focus()
                return false
            }
            // 2.图片验证是否正确
            if (this.msg == "再试⼀次" || this.msg == "向右滑动") {
                this.asynnChanIsShowToast({
                    msg: "请你滑到滑块到正确位置！",
                    type: "danger"
                })
                return false
            }
            return true
        }
    }
}
</script>

<style lang="less" scoped>
.login-modal {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
}

.mask {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
}

.login-box {
    width: 555px;
    height: 423px;
    position: absolute;
    border-radius: 5%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    background-color: #fff;
}

.close {
    /* 小手 */
    cursor: pointer;
    position: absolute;
    left: 480px;
    top: 24px;
    width: 38px;
}

.title {
    display: flex;
    justify-content: center;
    padding: 50px 0px 20px;
    color: #ccc;
    font-size: 18px;
}

.title li {
    cursor: pointer;
}

.title .active {
    color: #333;
}

.body {
    width: 360px;
    height: 240px;
    margin: 0 auto;
    // background-color: pink;
}

.btn {
    height: 50px;
    line-height: 50px;
    background-color: #4774dc;
    text-align: center;
    color: #fff;
}

.input-gruop {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.input-gruop input {
    width: 100%;
    height: 50px;
    text-indent: 10px;

}

.input-gruop .btn {
    width: 120px
}

.code {
    width: 160px;
    height: 50px;
    margin-right: 8px;
    text-indent: 10px;


}

.kill {
    background-color: #6c6a6a;
}

/deep/.slide-box {
    width: 100%;
    position: relative;
    box-sizing: border-box;

    canvas {
        position: absolute;
        left: 0;
        top: -120px;
        display: none;
        width: 100%;
        box-sizing: border-box;
    }

    .slide-verify-block {
        width: 85px;
        height: 136px;
    }

    .slide-verify-refresh-icon {
        top: -120px;
        display: none;
    }

    &:hover {
        canvas {
            display: block;
        }

        .slide-verify-refresh-icon {
            display: block;
        }
    }
}
</style>