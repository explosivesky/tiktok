import {
 mapGetters
} from "vuex"

export const animationMixin = {
 computed: {
  ...mapGetters(["getState"]),
  player() {
   return this.getState ? "running" : "paused"
  },
 }
}

// export const isShow = {
//  computed: {
//   ...mapGetters(["getIsShow"]),
//   isShow() {
//    return this.getIsShow
//   },
//  },
// }