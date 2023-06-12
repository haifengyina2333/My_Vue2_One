<template>
    <!-- 全屏覆盖 -->
    <div class="login-modal" @click="">
        <div class="mask" @click="close"></div>
        <div class="login-box">
            <img class="close" src="../assets/img/close.png" alt="" @click="close">
            <ul class="title">
                <li :class="isShowForm?'active':''" @click="isShowForm=true">手机登录</li>
                <li style="margin: 0px 18px; cursor:none">|</li>
                <li :class="!isShowForm ?'active':''" @click="isShowForm=false">微信登录</li>
            </ul>
            <div class="body">
                <div class="from" v-show="isShowForm">
                    
                    <div class="input-gruop">
                        <input type="text" >
                    </div>
                    <div class="input-gruop">
                        <input type="text" class="code">
                        <div class="btn">获取验证码</div>
                    </div>
                    <div class="btn">登录</div>
                </div>
                <div class="wx-qrcode" v-show="!isShowForm">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    data() {
        return {
            isShowForm:true
        }
    },
    methods: {
        ...mapMutations({
            chanIsShowLoginModal: "showLoginModal/chanIsShowLoginModal"
        }),
        close() {
            this.chanIsShowLoginModal(false)
        }
    }
}
</script>

<style scoped>
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

.title{
    display: flex;
    justify-content: center;
    padding: 50px 0px 20px;
    color: #ccc;
    font-size: 18px;
}
.title li{
    cursor: pointer;
}
.title .active{
    color: #333;
}
.body{
    width: 360px;
    height: 240px;
    margin: 0 auto;
    background-color: pink;
}
.btn{
    height: 50px;
    line-height: 50px;
    background-color: #4774dc;
    text-align: center;
    color: #fff;
}
.input-gruop{
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}
.input-gruop input{
    width: 100%;
    height: 50px;
    text-indent: 10px;

}
.input-gruop .btn{
    width: 120px
  

}
.code{
    width: 160px;
    height: 50px;
    margin-right: 8px;
    text-indent: 10px;
}

</style>