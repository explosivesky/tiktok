import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
//引入 iconfont 图标
import "assets/img/iconfont/iconfont.css"
//引入swiper
import VueAwesomeSwiper from "vue-awesome-swiper"
//引入swiper 样式
import "swiper/css/swiper.css"
//引入视频播放插件
import VideoPlayer from "vue-video-player"
require("video.js/dist/video-js.css")
require("vue-video-player/src/custom-theme.css")

//注册插件
Vue.use(VideoPlayer)
Vue.use(VueAwesomeSwiper)
new Vue({
  router,
  store,
  render: function(h) {
    return h(App)
  },
}).$mount("#app")
