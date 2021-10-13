<template>
  <div id="tab-bar" v-show="isShow">
    <div class="item" @click="handle(0)">
      <router-link to="/index" tag="span" :class="homeIndex === 0 ? 'isActive' : ''">首页</router-link>
    </div>
    <div class="item" @click="handle(1)">
      <router-link to="/follow" tag="span" :class="homeIndex === 1 ? 'isActive' : ''">朋友</router-link>
    </div>
    <div class="item">
      <router-link to="/home" tag="span"><img class="dy-btn" src="../../../assets/img/TabBar/add.jpg" alt="" /></router-link>
    </div>
    <div class="item" @click="handle(2)">
      <router-link to="/msg" tag="span" :class="homeIndex === 2 ? 'isActive' : ''">消息</router-link>
    </div>
    <div class="item" @click="handle(3)">
      <router-link to="/me" tag="span" :class="homeIndex === 3 ? 'isActive' : ''">我</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      homeIndex: 0,
      isLogin: false,
      docuHeight: document.documentElement.clientHeight,
      showHeight: document.documentElement.clientHeight,
      isShow: true
    }
  },
  methods: {
    handle (index) {
      this.homeIndex = index

      if (this.isLogin && index == 3) {
        this.$router.replace("/me")
      }
    },
  },
  mounted () {
    //如果已经登录了 那么将 /sign 的路由跳转到 /me 组件中
    // this.$bus.$on("changeIndex", (index, isLogin) => {
    //   this.isLogin = isLogin
    //   this.homeIndex = index
    // })

    this.isLogin = this.$store.state.home.isLogin
    this.homeIndex = this.$store.state.home.homeIndex

    //解决输入法顶页面的问题: 使用 onresize 事件，当页面高度变小时，将tabbar 隐藏
    window.onresize = () => {
      //避免全局污染
      return (() => {
        this.showHeight = document.body.clientHeight;
      })()
    }
  },
  watch: {
    showHeight () {
      if (this.docuHeight > this.showHeight) {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    }
  }
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
  font-size: 18px;
  line-height: 60px;
  color: #8f909d;
  background-color: black;
  z-index: 2;
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
