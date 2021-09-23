<template>
  <div id="index">
    <nav-bar :current-index="currentIndex">
      <div slot="left" class="iconfont icon-live"></div>
      <div slot="middle" class="middle">
        <span
          v-for="(item, index) in navBarData"
          class="item"
          @click="handle(index)"
          :class="{ isActive: index === currentIndex }"
          >{{ item }}</span
        >
      </div>
      <div slot="right" class="iconfont icon-sousuo"></div>
    </nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar"
export default {
  data() {
    return {
      navBarData: ["同城", "关注", "推荐"],
      currentIndex: 0,
    }
  },
  components: {
    NavBar,
  },
  methods: {
    handle(index) {
      this.currentIndex = index
    },
  },
}
</script>

<style scoped>
#index {
}
.middle {
  width: 100%;
  display: flex;
}
.middle .item {
  flex: 1;
}
.isActive {
  color: #ffffff;
  border-bottom: 3px solid #ffffff;
}
</style>
