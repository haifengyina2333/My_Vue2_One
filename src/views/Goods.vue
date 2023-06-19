<template>
  <div class="goods">
    <div class="wrap">
      <Crumb> </Crumb>
      <img src="../assets/img/banner.4c6b6225.png" width="100%" alt="" />
      <ul class="options">
        <li>
          <strong>排序：</strong>
          <span :class="num1 == index?'active':''" v-for="item,index in option1" :key="index" @click="Option1click(index,item.min,item.max)">{{ item.txt }}</span>
        </li>
        <li>
          <strong>分类：</strong>
          <span :class="num2 == index?'active':''" v-for="item,index in option2 " :key="index" @click="Option2click(index,item.type)">{{ item.txt }}</span>
        </li>
      </ul>
      <List :arr="goodList" :max-length="40" />
    </div>
  </div>
</template>                            
<script>
import { GoodsselectAPI } from '@/request/api';

import Crumb from "../components/Crumb.vue";
import List from "../components/home/List.vue";
export default {
  data() {
    return {
      goodList: [],
      // 栏目 目前可提供的参数是 1->精品推荐 2-> 热门兑换 0->全部
      did: 0,
      // ( 1->实体商品 2->虚拟商品 0->全部 )
      type: 0,
      // 大于多少积分，最少是0
      min: 0,
      // 少于多少积分，最多是10000，当传入0的时候，会直接返回所有商品，无视后台逻辑。
      max: 0,
      // 商品关键词
      keyword: "",

      option1: [
        { min: 0, max: 10000, txt: "全部" },
        // "我还可以兑换"的max值是Header组件的coin值
        { min: 0, max: 0, txt: "我还可以兑换" },
        { min: 0, max: 500, txt: "0-500分" },
        { min: 500, max: 1000, txt: "500-1000分" },
        { min: 1000, max: 1500, txt: "1000-1500分" },
        { min: 1500, max: 2500, txt: "1500-2500分" },
        { min: 2500, max: 6500, txt: "2500-6500分" },
        { min: 6500, max: 10000, txt: "6500-10000分" },
      ],
      // 分类数组项
      option2: [
        { type: 0, txt: "全部" },
        { type: 1, txt: "实体商品" },
        { type: 2, txt: "虚拟商品" },
      ],
      // 排序当前项
      num1: 0,
      // 分类当前项
      num2: 0,
    };
  },
  components: {
    Crumb,
    List,
  },
  // 地址一变就发送请求
  watch:{
    "$route.query.keyword":{
      handler(newVal,oldVal){
        this.keyword = newVal;
        this.GoodsSelect();
      }
    }
  },
  async created() {
    this.keyword = this.$route.query.keyword || ''
    this.GoodsSelect()
  },
  methods: {
    Option1click(i,min,max){
      this.num1 = i;
      this.min = min;
      this.max = max;
      this.GoodsSelect();
    },
    Option2click(i,type){
      this.num2 = i;
      this.type = type;
      this.GoodsSelect();
    },
    async GoodsSelect() {
      let res = await GoodsselectAPI({
        did: this.did,
        type: this.type,
        min: this.min,
        max: this.max,
        keyword: this.keyword
      });
      console.log(res);
      this.goodList = res.data;
    }
  }

};
</script>
 
<style lang = "less" scoped>
.goods {
  padding-bottom: 50px;
  background: #efefef;
  padding-top: 20px;

  .options {
    padding-top: 20px;
    padding-bottom: 40px;

    li {
      margin-top: 20px;

      strong {
        color: #000;
        font-weight: bold;
      }

      span {
        margin-right: 20px;
        margin-left: 10px;
        cursor: pointer;
        color: #999;

        &.active {
          color: #4774dc;
          font-weight: bold;
        }
      }
    }
  }
}
</style>