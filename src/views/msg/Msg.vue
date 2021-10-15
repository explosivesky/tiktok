<template>
  <div id="follow">
    <nav-bar class="nav-bar" v-if="isShow">
      <div slot="middle" class="title">消息</div>
      <div slot="right" class="title-mini">创建群聊</div>
    </nav-bar>
    <div class="search-bar padding">
      <div class="search-box">
        <div class="search-bar-left">
          <span class="iconfont icon-sousuo"></span>
          <span>搜索</span>
        </div>
        <input type="search" @click.stop.prevent="input">
        <div class="search-bar-right" v-if="!isShow" @click="cancel">取消</div>
      </div>
    </div>
    <scroll class="scroll" :scrollY="isSCroll">

      <router-view></router-view>
    </scroll>

  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll"
import NavBar from 'components/common/navBar/NavBar'
export default {
  data () {
    return {
      isShow: true,
      isSCroll: true,
      vertical: '',
      scroll: false
    }
  },
  components: {
    Scroll,
    NavBar
  },
  methods: {
    input () {
      this.isSCroll = false
      this.isShow = false
      this.vertical = 'vertical'
      this.$router.push('/friendList')
    },
    cancel () {
      this.isSCroll = true
      this.isShow = true
      this.vertical = ''
      this.$router.push('/msg')
    },
  }
}
</script>

<style scoped>
.padding {
  padding: 0 15px;
}
#follow {
  background-color: #151723;
  height: 100vh;
  overflow: hidden;
}
.scroll {
  height: calc(100% - 120px);
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;
}
.nav-bar {
  background-color: #151723 !important;
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
  padding-top: 20px;
  line-height: 40px;
  font-size: 17px;
  margin-bottom: 10px;
  color: #a2a2ae;
}
.search-bar-left {
  width: 20%;
  background-color: #383b43;
  height: 40px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.search-box {
  display: flex;
  overflow: hidden;
}
.search-bar input {
  border: none;
  outline: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  flex: 1;
  height: 40px;
  caret-color: yellow;
  background-color: #383b43;
}
.icon-sousuo {
  margin-right: 5px;
  font-size: 20px;
}
.search-bar-right {
  width: 15%;
  color: #ffffff;
  text-align: right;
}
</style>