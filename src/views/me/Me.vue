<template>
  <div id="me">
    <div class="me-top">
      <div class="bgc" :style="bgc"></div>
      <div class="icon-box">
        <div class="icon"></div>
      </div>
    </div>
    <div class="top-mask" v-show="isShow"></div>
    <scroll class="scroll" @scroll="scrollFn">
      <div class="user-wrap">
        <div class="padding">
          <div class="user-top">
            <div class="user-icon">
              <img src="~assets/img/rightBar/flower.jpg" alt="" />
            </div>
            <div class="btn">
              <button class="edit" @click="deitView">编辑资料</button>
              <button class="friend">+ 朋友</button>
            </div>
          </div>
          <div class="user-description">
            <div class="user-name">{{ data.userName }}</div>
            <div class="font-color">
              <div class="dy-id">抖音号 : {{ data.dyId }}</div>
              <div class="user-signature">{{ data.userDes }}</div>
              <div class="user-tags">
                <span>23岁</span>
                <span>山东·淄博</span>
                <span>+添加学校等标签</span>
              </div>
              <div class="user-id-tags">
                <span><a href="">{{ data.userInfo.praise }}</a>获赞</span>
                <span><a href="">{{ data.userInfo.focus }}</a>关注</span>
                <span><a href="">{{ data.userInfo.fans }}</a>粉丝</span>
              </div>
            </div>
            <div class="banner">DOU 福袋 领百元红包</div>
          </div>
          <div class="user-tab-box">
            <div class="nav-bar">
              <div class="item" :class="{ isActive: index == currentIndex }" @click="handle(index)" v-for="(value, key, index) in meData">
                {{ key }} <span>{{ value }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-wrap">
          <img v-for="(item, index) in data.userWorksImg" :src="item" alt="" />
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import { mockData } from "../../netWork/mockData"

import Scroll from "../../components/common/scroll/Scroll"
export default {
  data () {
    return {
      bgc: {
        backgroundImage:
          "url(" + require("../../assets/img/rightBar/bg.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      },
      meData: {
        作品: 26,
        动态: 58,
        喜欢: 285,
      },
      currentIndex: 0,
      data: {},
      isShow: false,
    }
  },
  methods: {
    handle (index) {
      this.currentIndex = index
    },
    //控制顶部 mask 遮挡层是否显示
    scrollFn (position) {
      if (position.y <= -50) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    },
    deitView () {
      this.$router.replace('/edit')
    }
  },
  created () {
    mockData().then((req) => {
      this.data = req.data
    })

  },
  mounted () {

  },
  components: {
    Scroll,
  },
}
</script>

<style scoped>
#me {
  box-sizing: border-box;
  position: relative;
  height: 100vh;
  background-color: #0f1721;
}
.scroll {
  /* padding-top: 10px; */
  height: calc(100% - 60px - 100px);
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  z-index: 2;
  /* overflow: hidden; */
}
button {
  border: none;
  color: #ffffff;
  background-color: #393841;
  border-radius: 2px;
}
.me-top {
  height: 50%;
}
.top-mask {
  background-color: #0f1721;
  position: absolute;
  width: 100%;
  height: 50px;
  top: 0;
  left: 0;
  z-index: 5;
}
.bgc {
  height: 100%;
  /* background-size: 50% 50%; */
}
.icon-box {
  position: absolute;
  top: 15px;
  right: 20px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  z-index: 7;
  background-color: rgba(0, 0, 0, 0.3);
}
.icon-box .icon {
  background-color: #ffffff;
  border-top: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
  background-clip: content-box;
  height: 16.5px;
  width: 18px;
  padding: 5px 0;
}
.user-wrap {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #0f1721;
}
.padding {
  padding: 0 15px;
}
.user-top {
  position: relative;
  top: -10px;
  display: flex;
  align-items: center;
  width: 100%;
}
.btn {
  display: flex;
  flex: 1;
  text-align: center;
  white-space: nowrap;
  height: 40px;
}
.btn .edit {
  padding: 5px 35px;
  margin-right: 5px;
}
.btn .friend {
  padding: 5px 15px;
}
.user-icon {
  width: 110px;
  height: 110px;
  border: 5px solid #000000;
  border-radius: 50%;
  margin-right: 15px;
}
.user-icon > img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.user-description {
  margin-top: 20px;
  text-align: left;
}
.user-description .user-name {
  font-weight: 600;
  color: #fff;
  font-size: 25px;
}
.font-color {
  color: #cccccc;
}
.dy-id {
  margin-top: 10px;
  font-size: 14px;
}
.user-signature {
  margin-top: 20px;
  font-size: 18px;
}
.user-tags {
  display: flex;
  font-size: 12px;
  margin: 15px 0;
}
.user-tags span {
  padding: 5px;
  background-color: #1f2430;
  color: #6a6e72;
  border-radius: 3px;
  margin-right: 5px;
}
.user-id-tags {
  display: flex;
}
.user-id-tags > span {
  font-size: 16px;
  color: #6a6e72;
  margin-right: 15px;
}
.user-id-tags > span > a {
  color: #ffff;
  padding-right: 4px;
}
.banner {
  width: 100%;
  background-color: #ff405f;
  border-radius: 5px;
  font-size: 25px;
  font-weight: 600;
  color: #ffffff;
  padding: 10px;
  text-align: center;
  margin-top: 10px;
}
.user-tab-box {
  margin-top: 10px;
  height: 40px;
  line-height: 40px;
  color: #6a6e72;
}
.user-tab-box .nav-bar {
  display: flex;
  align-items: center;
  font-size: 18px;
}
.user-tab-box .nav-bar .item {
  width: 33.33%;
}
.isActive {
  border-bottom: 2px solid #efd04a;
  color: #fff;
}
.tab-wrap {
  margin-top: 2px;
  display: flex;
  flex-wrap: wrap;
}
.tab-wrap img {
  width: 33.33%;
  height: 190px;
}
</style>
