import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入 iconfont 图标
import 'assets/img/iconfont/iconfont.css'
//引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
//引入swiper 样式
import 'swiper/css/swiper.css'
//注册插件
Vue.use(VueAwesomeSwiper)
new Vue({
 router,
 store,
 render: function (h) {
  return h(App)
 }
}).$mount('#app')