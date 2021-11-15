<template>
  <div class="card-wrap">
    <!-- <div class="QQ_top">
      <div class="fancypig-head">QQ/老邮箱密码库</div>
      <van-cell-group class="fancypig-cell">
        <van-field v-model="qq_value" placeholder="请输入QQ/邮箱地址" />
      </van-cell-group>
      <div class="fancypig-foot">
        <van-button class="fancypig-button" type="info" @click="submit('qq')"
          >查询</van-button
        >
      </div>
    </div>
    <div v-if="qqData" class="detail_wrap">
      <van-cell :title="`邮箱: ${qqData.mail || ''}`" />
      <van-cell :title="`密码: ${qqData.password || ''}`" />
    </div>
    <div class="QQ_top">
      <div class="fancypig-head">老邮箱绑定手机/密码库</div>
      <van-cell-group class="fancypig-cell">
        <van-field v-model="mobile_value" placeholder="请输入邮箱" />
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
      <van-cell :title="`邮箱: ${mobileData.mail || ''}`" />
      <van-cell :title="`密码/手机: ${mobileData.info || ''}`" />
    </div> -->
    <div class="QQ_top help_wrap">
      <div class="fancypig-head">更多精彩</div>
      <div class="van-cell">
        <div class="van-cell__title">
          <span
            >2021史上最全的社工思路分享
            <a
              class="van-cell-herf"
              href="https://www.iculture.cc/sg/pig=1034"
              >点击查看&gt;&gt;</a
            ></span
          >
        </div>
    </div>
    <div class="van-cell">
        <div class="van-cell__title">
          <span
            >微博uid获取教程
            <a
              class="van-cell-herf"
              href="https://www.iculture.cc/sg/pig=200"
              >点击查看&gt;&gt;</a
            ></span
          >
        </div>
    </div>
    <div class="van-cell">
        <div class="van-cell__title">
          <span
            >短信压力测试教程
            <a
              class="van-cell-herf"
              href="https://www.iculture.cc/sg/pig=202"
              >点击查看&gt;&gt;</a
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
  name: "QQCard",
  data() {
    return {
      qq_value: "",
      mobile_value: "",
      qqData: null,
      mobileData: null,
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
        let data = await instance.get("/rice-pwd1.php", {
          params: { mod: "cha", mail: this.qq_value },
        });
        this.timer = setTimeout(() => {
          Toast.clear();
          clearTimeout(this.timer);
          this.qqData = data.data;
        }, 1000);
      }
      if (type === "mobile") {
        this.mobileData = null;
        let data = await instance.get("/rice-pwd2.php", {
          params: { mod: "cha", mail: this.mobile_value },
        });
        this.timer = setTimeout(() => {
          Toast.clear();
          clearTimeout(this.timer);
          this.mobileData = data.data;
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
.help_wrap {
  height: 177px;
  .van-cell-herf {
    color: #007aff;
  }
}
</style>
