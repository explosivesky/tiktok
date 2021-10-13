<template>
  <div id="msg-nav-bar">
    <nav-bar class="nav-bar">
      <div slot="middle" class="title">消息</div>
      <div slot="right" class="title-mini">创建群聊</div>
    </nav-bar>
    <div class="search-bar">
      <div class="search-box">
        <div class="search-bar-left">
          <span class="iconfont icon-sousuo"></span>
          <span>搜索</span>
        </div>
        <input type="search" @click.stop.prevent="input">
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../navBar/NavBar'
export default {
  components: {
    NavBar
  },
  methods: {
    input () {
      this.$emit('input')
    }
  }
}
</script>

<style scoped>
.padding {
  padding: 0 15px;
}
.nav-bar {
  position: fixed !important;

  background-color: #151723 !important;

  /* z-index: 100; */
}
.title {
  font-size: 20px;
  color: #ffffff;
}
.title-mini {
  color: #cccccc;
  font-size: 15px;
}
.search-bar {
  padding-top: 75px;
  line-height: 40px;
  font-size: 18px;
  color: #a2a2ae;
}
.search-bar-left {
  flex: 1;
  background-color: #383b43;
  height: 40px;
}
.search-box {
  border-radius: 5px;
  display: flex;
  overflow: hidden;
}
.search-bar input {
  border: none;
  outline: none;
  width: 80%;
  height: 40px;
  caret-color: yellow;
  background-color: #383b43;
}
.icon-sousuo {
  margin-right: 5px;
  font-size: 20px;
}
</style>