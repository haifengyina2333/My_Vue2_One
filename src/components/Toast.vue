<template>
    <!-- 提示框组件 -->
    <div class="Toast">
        <i class="iconfont " :class="type == 'success' ? 'iconfont icon-toast_chenggong' :
            (type == 'danger' ? 'iconfont icon-toast-shibai_huaban' : 'iconfont icon-toast-jinggao')"></i>
        <span>{{ msg }}</span>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "Toast",
    data() {
        return {

        }
    },
    computed: {
        ...mapState('isShowToast', ['isShowToast', 'type', 'msg']),
    },

}
</script>
<!-- 
    封装Toast组件总结：
        样式结构
        显示隐藏变量存在Vuex中
        过渡效果（进场离场）
        msg和type属性处理
        定时器，关闭Toast:组件
        抽取定时器到actions的方法中
 -->
<style lang="less" scoped>
.Toast {
    position: fixed;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;

    i {
        margin-right: 15px;
    }

    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 0 10px #fff;
    font-size: 18px;

    .icon-toast_chenggong {
        color: green;
    }

    .icon-toast-jinggao {
        color: rgb(149, 149, 9);
    }

    .icon-toast-shibai_huaban {
        color: red;
    }
}
</style>