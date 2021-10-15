import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [{
  path: "/",
  redirect: "index",
 },
 {
  path: "/",
  component: () => import('../views/Home.vue'),
  name: "home",
  children: [{
    path: '/index',
    component: () => import("../views/index/Index.vue"),
    children: [{
     path: '/index',
     component: () => import('../views/index/indexChildCmps/VideoList.vue')
    }]
   }, {
    path: "/follow",
    component: () => import("../views/follow/Follow.vue"),
   }, {
    path: "/msg",
    component: () => import("../views/msg/Msg.vue"),
    children: [{
      path: '/msg',
      component: () => import('../views/msg/msgChild/MsgIndex.vue')
     },
     {
      path: '/friendList',
      component: () => import('../views/msg/msgChild/FriendList.vue')
     }
    ]
   }, {
    path: "/profile",
    component: () => import("../views/phoneSign/Profile.vue"),
   },
   {
    path: '/me',
    component: () => import('../views/me/Me.vue')
   }
  ]

 }, {
  path: '/sign',
  component: () => import('../views/phoneSign/Sign.vue')
 }, {
  path: '/phonesign',
  component: () => import('../views/phoneSign/PhoneSign.vue')
 },
 {
  path: '/verification',
  component: () => import('../views/phoneSign/SignVerification.vue')
 }, {
  path: '/toast',
  component: () => import('../components/common/toast/Toast.vue')
 },
 {
  path: '/edit',
  component: () => import('../views/me/Edit.vue')
 },
 {
  path: '/publish',
  component: () => import('../views/publish/Publish.vue'),
 },

]

const router = new VueRouter({
 mode: "history",
 base: process.env.BASE_URL,
 routes,
})

export default router