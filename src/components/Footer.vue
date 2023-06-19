<template>
  <div class="footer-b">
    <div class="heart wrap">
      <div class="footer-i">
        <h2>
          <!-- <a href=""><img src="../assets/img/slogan.7730f7f2.png" alt="" /></a> -->
          开发者自我介绍
        </h2>
        <p style="line-height: 1.6em">
          首先我的生理性别是男的，但我有性别认知障碍，一直认为自己是个女的。而且我是个同性恋，所以我喜欢女性。同时我是原教旨主义者，所以不能做变性手术变性，并且我有严重的异装癖，所以我只穿男装。还有，我是一个坚定的素食主义者，同时我有非常严重的异食癖。所以我只能吃肉，我是极端动物保护主义者，但我有严重的厌食症，只要身边有人吃素食（包括自己）我就吃不下饭，所以我每天只能和所有人一起吃肉。对了，我对于人种认知也有问题，我认为我是一个黑人，但是我有严重的白化病和肝功能障碍引起的黄疸，所以我得皮肤是黄色的。我有自虐倾向，但是因为我是新教教徒，不能伤害自己的身体不能自虐导致抑郁症。我还有自闭症，间歇性发作，睡眠时候发作，一句话不说。
        </p>
      </div>
      <ul>
        <li>
          <img src="../assets/img/wx.jpg" alt="" />
          <b>我也知道很难看，很不协调，但是没办法嘛！我也不想去下 PS 处理图片，能扫就行了，理解一下</b>
          <a href="javascript:;">微信</a>
        </li>
        <li>
          <b>空空如也捏</b>
          <a href="javascript:;">QQ &nbsp; </a></li>
        <li>
          <a href="https://gitee.com/xuejiuainiyo/my_-vue2_-one">项目地址</a>
        </li>
      </ul>
      <div class="footer-r">
        <p>电子邮箱</p>
        <h3>zhourainmoon@gmail.com</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
 
<style lang = "less" scoped>
.footer-b {
  width: 100%;
  /* margin-top: 20px; */
  height: 300px;
  background: #242b39;

  .heart {
    display: flex;
    justify-content: space-between;

    .footer-i {
      padding-top: 32px;

      h2 {
        color: #7d879a;
      }

      p {
        padding-top: 27px;
        width: 426px;
        height: 55px;
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #7d879a;
      }
    }

    ul {
      margin-top: 123px;
      width: 293px;
      display: flex;
      justify-content: space-between;

      li {
        border-right: 1px solid #9e9e9e;
        height: 20px;
        position: relative;
        text-align: center;
        transition: all 0.3s;
        img {
          position: absolute;
          height: 250px;
          left: -150%;
          top: -280px;
          display: none;
          // opacity: 0;
          transition: all 0.25s;

        }

        b {
          position: absolute;
          width: 250px;
          left: -220%;
          top: 25px;
          display: none;
          color: #ffffff;
          transition: all 0.25s;
          // opacity: 0;
        }

      &:hover {
          img {
            display: block;
            // opacity: 1;
          }

          b {
            display: block;
            // opacity: 1;
          }
        }

        a {
          height: 19px;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #7d879a;
          padding-right: 16px;
          text-decoration: none;
        }

        &:last-child {
          border-right: 0;
        }
      }
    }

    .footer-r {
      padding-top: 90px;

      p {
        width: 117px;
        height: 14px;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #7d879a;
      }

      h3 {
        margin-top: 10px;
        width: 220px;
        height: 22px;
        font-size: 22px;
        font-family: SourceHanSansSC;
        font-weight: bold;
        color: #ffffff;
      }
    }
  }
}</style>