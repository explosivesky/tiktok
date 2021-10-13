<template>
  <div id="right-bar">
    <div class="right-avatar">
      <img src="~assets/img/rightBar/flower.jpg" alt="" />
      <span class="iconfont icon-jia"></span>
    </div>
    <div class="like">
      <div class="iconfont icon-icon4"></div>
      <span>18.0w</span>
    </div>
    <div class="recomment" @touchstart.stop.prevent="handle()">
      <div class="iconfont icon-pinglun"></div>
      <span>18.0w</span>
    </div>
    <div class="share">
      <div class="iconfont icon-fenxiang1"></div>
      <span>18.0w</span>
    </div>
    <div class="right-music">
      <img src="~assets/img/rightBar/flower.jpg" alt="" :style="{ 'animation-play-state': player }" />
    </div>
  </div>
</template>

<script>
import { animationMixin } from "utils/mixin"
export default {
  mixins: [animationMixin],
  props: ["index"],
  data () {
    return {}
  },
  methods: {
    //如果要使用 事件函数
    handle () {
      this.$store.commit("show", true)
    },
  },
}
</script>

<style scoped>
#right-bar {
  position: fixed;
  bottom: 40%;
  right: 7px;
  z-index: 2;
  transform: translateY(50%);
}
.right-avatar {
  border: 2px solid #ffffff;
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.right-avatar img,
.right-music img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
#right-bar .icon-jia {
  position: relative;
  top: -11px;
  font-size: 18px;
  color: rgb(241, 106, 106);
  background-color: #ffffff;
  border-radius: 50%;
}
.iconfont {
  color: #ffffff;
  font-size: 45px;
}
.iconfont + span {
  font-size: 12px;
  color: #ffffff;
  font-weight: 100;
}
.like {
  padding-top: 20px;
}
.right-music {
  margin: 0 auto;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 10px solid black;
  margin-top: 25px;
}
.right-music img {
  animation: music 5s 0s linear infinite;
}
@keyframes music {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
