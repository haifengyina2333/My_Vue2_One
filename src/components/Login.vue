<template>
    <!-- 全屏覆盖 -->
    <div class="login-modal" @click="">
        <div class="mask" @click="close"></div>
        <div class="login-box">
            <img class="close" src="../assets/img/close.png" alt="" @click="close">
            <ul class="title">
                <li :class="isShowForm ? 'active' : ''" @click="isShowForm = true">手机登录</li>
                <li style="margin: 0px 18px; cursor:none">|</li>
                <li :class="!isShowForm ? 'active' : ''" @click="isShowForm = false">微信登录</li>
            </ul>
            <div class="body">
                <div class="from" v-show="isShowForm">

                    <div class="input-gruop">
                        <input type="text" placeholder="请输入手机号" v-model="phoneNum"
                        ref="phone">
                    </div>
                    <div class="input-gruop">
                        <slide-verify :l="42" :r="20" :w="360" :h="140" @success="onSuccess" @fail="onFail"
                            @refresh="onRefresh" :style="{ width: '100%' }" class="slide-box" ref="slideBlock"
                            :slider-text="msg"></slide-verify>
                    </div>
                    <div class="input-gruop">
                        <input type="text" class="code" placeholder="请输入短信验证码">
                        <div class="btn" :class="isShowSMCode ?'kill':''" >
                        <span v-show="!isShowSMCode" @click="getSMcode
                        ">获取验证码</span>
                        <span v-show="isShowSMCode">{{count}}s</span>
                        </div>
                    </div>
                    <div class="btn" @click="submitLogin">登录</div>
                </div>
                <div class="wx-qrcode" v-show="!isShowForm">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import instance from '@/request/request';
import {validatePhoneNum} from '../util/index'
export default {
    data() {
        return {
            isShowForm: true,
            msg: "向右滑动",
            // 手机号
            phoneNum:'',
            isShowSMCode:false,
            count:60
            
        }
    },
    methods: {
        ...mapMutations({
            chanIsShowLoginModal: "showLoginModal/chanIsShowLoginModal"
        }),
        close() {
            this.chanIsShowLoginModal(false)
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
        submitLogin(){
            // - 手机号码验证

            // - 图片验证码验证
            if(this.msg ==  "再试⼀次" || this.msg == "向右滑动" ){
                alert("请你滑到滑块到正确位置！")
                return
            }

            alert("登陆成功！")
        },
        // 短信验证码
        getSMcode(){
            
            if (!validatePhoneNum(this.phoneNum)){
                alert("请您输入正确的手机号码")
                // 聚焦用户鼠标焦点
                this.$refs.phone.focus()
                return
            }
            // 2.图片验证是否正确
            if(this.msg ==  "再试⼀次" || this.msg == "向右滑动" ){
                alert("请你滑到滑块到正确位置！")
                return
            }
            // 3.发送验证码 --- axios 请求
            this.isShowSMCode = true;
            this.countDown();
        },
        countDown(){
            let timer = setInterval(()=>{
                this.count--
                if(this.count == 0){
                    clearInterval(timer);
                    this.isShowSMCode == false;
                    this.count = 60;
                }
            },1000)
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
.kill{
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