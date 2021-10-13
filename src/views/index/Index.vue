<template>
  <div id="index">
    <nav-bar :current-index="currentIndex">
      <div slot="left" class="iconfont icon-live"></div>
      <div slot="middle" class="middle">
        <span v-for="(item, index) in navBarData" class="item" @click="handle(index)" :class="{ isActive: index === currentIndex }">{{ item }}</span>
      </div>
      <div slot="right" class="iconfont icon-sousuo"></div>
    </nav-bar>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar"
// import VideoList from "./indexChildCmps/VideoList"

export default {
  data () {
    return {
      navBarData: ["同城", "关注", "推荐"],
      currentIndex: 2,
    }
  },
  components: {
    NavBar,
    // VideoList,
  },
  methods: {
    handle (index) {
      this.currentIndex = index
    },
  }
}
</script>

<style scoped>
#index {
}
.middle {
  width: 100%;
  display: flex;
  font-size: 16px;
}
.middle .item {
  flex: 1;
}
.isActive {
  color: #ffffff;
  border-bottom: 3px solid #ffffff;
}
.icon-sousuo,
.icon-live {
  font-size: 25px;
}
</style>
