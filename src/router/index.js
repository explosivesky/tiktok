import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
 path: '/',
 redirect: 'index'
}, {
 path: '/',
 name: 'home',
 component: () => import('../views/Home.vue'),
 children: [{
   path: '/index',
   component: () => import('../views/index/Index.vue'),
   name: 'index',
   children: [{
    path: '/',
    component: () => import('../components/common/videoList/VideoList.vue'),
    name: 'index'
   }]
  },
  {
   path: '/follow',
   component: () => import('../views/follow/Follow.vue')
  }, {
   path: '/msg',
   component: () => import('../views/msg/Msg.vue')
  }, {
   path: '/profile',
   component: () => import('../views/profile/Profile.vue')
  }
 ]
}]

const router = new VueRouter({
 mode: 'history',
 base: process.env.BASE_URL,
 routes
})

export default router