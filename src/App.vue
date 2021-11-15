<template>
  <div id="app">
    <div class="header">猪头汉堡分店-FancyPig</div>
    <div class="main">
      <van-tabs
        class="fancypig-tab"
        v-model="active"
        swipeable
        title-active-color="#00b4aa"
      >
        <van-tab title="账户" name="1">
          <QQCard />
        </van-tab>
        <van-tab title="手机" name="2">
          <MBCard />
        </van-tab>
        <van-tab title="其他" name="3">
          <MMCard />
        </van-tab>
      </van-tabs>
    </div>
    <div class="footer">
       © Designed by <a href="https://www.iculture.cc">FancyPig's blog</a>
    </div>
  </div>
</template>

<script>
import QQCard from "./components/QQCard.vue";
import MBCard from "./components/MBCard.vue";
import MMCard from "./components/MMCard.vue";
import { Dialog } from 'vant';
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?cb7a49e4f6a740b15e6fd25de2803712";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();


export default {
  name: "App",
  components: {
    QQCard,
    MBCard,
    MMCard,
  },
  data() {
    return {
      active: "1",
    };
  },
  mounted() {
    Dialog.alert({
      title: "提示",
      message: "欢迎来到猪头汉堡分店",
      theme: "round-button",
      confirmButtonColor: 'linear-gradient(90deg,#1278f6,#00b4aa)'
    });
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Helvetica Neue", Helvetica, sans-serif;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f8f8f8;
  overflow: hidden;
}
.header {
  height: 45px;
  line-height: 45px;
  text-align: center;
  box-shadow: 0 1px 6px #ccc;
  font-size: 17px;
  font-weight: 500;
  color: #fff;
  flex-shrink: 0;
  background: linear-gradient(90deg,#1278f6,#00b4aa);
}
.main {
  margin-top: 3px;
  flex: 1;
  overflow: hidden;
  overflow-y: auto;
  .fancypig-tab {
    .van-tabs__line {
      height: 2px;
      background: #04a5bd;
    }
  }
}

.footer {
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 14px;
  flex-shrink: 0;
  a {
    color: #007aff;
  }
}

@media screen and (min-width: 675px) {
  #app {
    width: 675px;
  }
}
</style>
