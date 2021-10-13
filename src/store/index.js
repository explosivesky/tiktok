import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
 state: {
  rotateState: false,
  isShow: false,
  home: {
   isLogin: false,
   homeIndex: 0
  }
 },
 mutations: {
  stateStart(state, payload) {
   state.rotateState = payload
  },
  statePause(state, payload) {
   state.rotateState = payload
  },
  show(state, payload) {
   state.isShow = payload
  },
  noShow(state, payload) {
   state.isShow = payload
  },
  login(state, payload) {
   state.home.isLogin = payload.isLogin
   state.home.homeIndex = payload.homeIndex
  }
 },
 actions: {},
 modules: {},
 getters: {
  getState(state) {
   return state.rotateState
  },
  getIsShow(state) {
   return state.isShow
  },
  getMeCmp(state) {
   return state.home
  }
 }
})