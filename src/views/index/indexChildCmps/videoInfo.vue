<template>
  <div id="video-info">
    <div class="user-name">@explosive</div>
    <div class="user-comment">使用vueCLI@4实现抖音APP</div>
    <div class="music">
      <span class="music-icon iconfont icon-yinfu"></span>
      <div class="music-name">
        <span data-attr="explosive的音乐" class="music-name-span" :style="{ 'animation-play-state': player }">explosive的音乐</span>
      </div>
    </div>
  </div>
</template>

<script>
import { animationMixin } from "utils/mixin"
export default {
  mixins: [animationMixin],
  data () {
    return {}
  },
}
</script>

<style scoped>
#video-info {
  position: fixed;
  bottom: 70px;
  left: 20px;
  color: rgb(245, 233, 233);
  text-align: left;
  font-size: 16px;
}
.user-name {
  margin-bottom: 10px;
}
.user-comment {
  margin-bottom: 15px;
}
.music {
  display: flex;
}
.music-icon {
  margin-right: 3px;
}
.music-name span::after {
  content: attr(data-attr);
  margin-left: 40px;
}
.music-name {
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
}
.music-name-span {
  display: inline-block;
  animation: scroll 5s linear infinite;
}
@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-50% - 30px));
  }
}
</style>
