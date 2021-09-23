<template>
  <div id="tab-bar">
    <div class="item" @click="handle(0)">
      <router-link
        to="/index"
        tag="span"
        :class="homeIndex === 0 ? 'isActive' : ''"
        >首页</router-link
      >
    </div>
    <div class="item" @click="handle(1)">
      <router-link
        to="/follow"
        tag="span"
        :class="homeIndex === 1 ? 'isActive' : ''"
        >熟人</router-link
      >
    </div>
    <div class="item">
      <router-link to="/home" tag="span"
        ><img class="dy-btn" src="../../../assets/img/TabBar/add.jpg" alt=""
      /></router-link>
    </div>
    <div class="item" @click="handle(2)">
      <router-link
        to="/msg"
        tag="span"
        :class="homeIndex === 2 ? 'isActive' : ''"
        >消息</router-link
      >
    </div>
    <div class="item" @click="handle(3)">
      <router-link
        to="/profile"
        tag="span"
        :class="homeIndex === 3 ? 'isActive' : ''"
        >我</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      homeIndex: 0,
    }
  },
  methods: {
    handle(index) {
      this.homeIndex = index
    },
  },
}
</script>

<style scoped>
#tab-bar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  font-size: 16px;
  line-height: 60px;
  color: #cccccc;
  background-color: black;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
}
#tab-bar .item {
  flex: 1;
}
#tab-bar .item .dy-btn {
  padding-top: 15px;
}
.isActive {
  color: #ffffff;
}
</style>
