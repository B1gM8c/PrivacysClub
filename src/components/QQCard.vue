<template>
  <div class="card-wrap">
    <div class="QQ_top">
      <div class="fancypig-head">QQ号一键查询</div>
      <van-cell-group class="fancypig-cell">
        <van-field v-model="qq_value" placeholder="请输入QQ号码" />
      </van-cell-group>
      <div class="fancypig-foot">
        <van-button class="fancypig-button" type="info" @click="submit('qq')"
          >查询</van-button
        >
      </div>
    </div>
    <div v-if="qqData" class="detail_wrap">
      <van-cell :title="`QQ: ${qqData.qq || ''}`" />
      <van-cell :title="`手机: ${qqData.mobile || ''}`" />
            <van-cell
        :title="`运营商: ${qqData.province || ''}${qqData.city || ''}${
          qqData.isp || ''
        }`"
      />
      <van-cell :title="`LOL游戏名： ${qqData.id || ''}`" />
      <van-cell :title="`LOL大区： ${qqData.server || ''}`" />
      <van-cell :title="`微博uid: ${qqData.uid || ''}`" />
      <div class="van-cell">
        <div class="van-cell__title">
          <span
            >访问链接:
            <a
              class="van-cell-herf"
              :href="`https://weibo.com/u/${qqData.uid}`"
              >点击访问</a
            ></span
          >
        </div>
      </div>
    </div>
     <div class="QQ_top">
      <div class="fancypig-head">微博uid一键查询</div>
      <van-cell-group class="fancypig-cell">
        <van-field v-model="mobile_value" placeholder="请输入微博uid" />
      </van-cell-group>
      <div class="fancypig-foot">
        <van-button
          class="fancypig-button"
          @click="submit('mobile')"
          type="info"
          >查询</van-button
        >
      </div>
    </div>
    <div v-if="mobileData" class="detail_wrap">
      <van-cell :title="`手机: ${mobileData.mobile || ''}`" />
      <van-cell
        :title="`运营商: ${mobileData.province || ''}${mobileData.city || ''}${
          mobileData.isp || ''
        }`"
      />
      <van-cell :title="`QQ: ${mobileData.qq || ''}`" />
      <van-cell :title="`LOL游戏名： ${mobileData.id || ''}`" />
      <van-cell :title="`LOL大区： ${mobileData.server || ''}`" />
    </div>

         <div class="QQ_top">
      <div class="fancypig-head">LOL游戏名一键查询</div>
      <van-cell-group class="fancypig-cell">
        <van-field v-model="lol_value" placeholder="请输入LOL游戏id" />
      </van-cell-group>
      <div class="fancypig-foot">
        <van-button
          class="fancypig-button"
          @click="submit('lol')"
          type="info"
          >查询</van-button
        >
      </div>
    </div>
    <div v-if="lolData" class="detail_wrap">
      <van-cell :title="`LOL游戏名： ${lolData.id || ''}`" />
      <van-cell :title="`LOL大区： ${lolData.server || ''}`" />
       <van-cell :title="`QQ: ${lolData.qq || ''}`" />
      <van-cell :title="`手机: ${lolData.mobile || ''}`" />
      <van-cell
        :title="`运营商: ${lolData.province || ''}${lolData.city || ''}${
          lolData.isp || ''
        }`"
      />
    </div>
  </div>

  
</template>

<script>
import instance from "@/request/api";
import { Toast } from "vant";
export default {
  name: "QQCard",
  data() {
    return {
      qq_value: "",
      mobile_value: "",
      lol_value: "",
      qqData: null,
      mobileData: null,
      lolData:null,
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
      if (type === "qq") {
        this.qqData = null;
        let data = await instance.get("/combine-1.php", {
          params: { mod: "cha", qq: this.qq_value },
        });
        this.timer = setTimeout(() => {
          Toast.clear();
          clearTimeout(this.timer);
          this.qqData = data.data;
        }, 1000);
      }
       if (type === "mobile") {
        this.mobileData = null;
        let data = await instance.get("/combine-3.php", {
          params: { mod: "cha", uid: this.mobile_value },
        });
        this.timer = setTimeout(() => {
          Toast.clear();
          clearTimeout(this.timer);
          this.mobileData = data.data;
        }, 1000);
      }
       if (type === "lol") {
        this.lolData = null;
        let data = await instance.get("/combine-4.php", {
          params: { mod: "cha", id: this.lol_value },
        });
        this.timer = setTimeout(() => {
          Toast.clear();
          clearTimeout(this.timer);
          this.lolData = data.data;
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
