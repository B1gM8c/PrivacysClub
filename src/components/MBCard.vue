<template>
  <div class="card-wrap">
    <div class="QQ_top">
      <div class="fancypig-head">手机号一键查询</div>
      <van-cell-group class="fancypig-cell">
        <van-field v-model="wb_value" placeholder="请输入手机号" />
      </van-cell-group>
      <div class="fancypig-foot">
        <van-button class="fancypig-button" type="info" @click="submit('wb')"
          >查询</van-button
        >
      </div>
    </div>
    <div v-if="wbData" class="detail_wrap">
      <van-cell :title="`手机: ${wbData.mobile || ''}`" />
      <van-cell
        :title="`运营商: ${wbData.province || ''}${wbData.city || ''}${
          wbData.isp || ''
        }`"
      />
       <van-cell :title="`QQ: ${wbData.qq || ''}`" />
      <van-cell :title="`LOL游戏名： ${wbData.id || ''}`" />
      <van-cell :title="`LOL大区： ${wbData.server || ''}`" />
      <van-cell :title="`微博uid: ${wbData.uid || ''}`" />
      <div class="van-cell">
        <div class="van-cell__title">
          <span
            >访问链接:
            <a
              class="van-cell-herf"
              :href="`https://weibo.com/u/${wbData.uid}`"
              >点击访问</a
            ></span
          >
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import instance from "@/request/api";
import { Toast } from "vant";
export default {
  name: "MBCard",
  data() {
    return {
      wb_value: "",
      wbData: null,
      timer: null,
    };
  },
  methods: {
    // 查询按钮点击
    async submit(type) {
      this.timer && clearTimeout(this.timer);
      Toast.loading({
        duration: 0,
        message: "查询中...",
        forbidClick: true,
        loadingType: "spinner",
      });
      if (type === "wb") {
        this.wbData = null;
        let data = await instance.get("/combine-2.php", {
          params: { mod: "cha", mobile: this.wb_value },
        });
        this.timer = setTimeout(() => {
          Toast.clear();
          clearTimeout(this.timer);
          this.wbData = data.data;
        }, 1000);
      }
     
    },
  },
};
</script>

<style scoped lang="scss">
.card-wrap {
  width: 100%;
  padding: 0 15px;
}
.QQ_top {
  width: 100%;
  height: 136px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 15px;
  background: #fff;

  .fancypig-head {
    text-align: center;
    background: linear-gradient(90deg,#1278f6,#00b4aa);
    color: white;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    border-radius: 4px 4px 0 0;
    margin-bottom: 3px;
  }
  .fancypig-cell {
    margin: 0 10px;
    .van-cell {
      padding: 10px 0;
    }
  }
  [class*="van-hairline"]::after {
    border-bottom: 1px solid #ccc;
  }
  .fancypig-foot {
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    .fancypig-button {
      width: 80px;
      height: 30px;
      font-size: 14px;
      background: linear-gradient(90deg,#1278f6,#00b4aa);
      border-radius: 4px;
    }
  }
}
.detail_wrap {
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 10px;
  .van-cell-herf {
    color: #007aff;
  }
}
.fancypig-load {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .fancypig-load-item {
    background: rgba(0, 0, 0, 0.9);
    height: 120px;
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    .van-loading__text {
      font-size: 14px !important;
      margin-top: 8px !important;
    }
  }
}
</style>
