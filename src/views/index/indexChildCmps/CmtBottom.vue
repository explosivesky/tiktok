<template>
  <div id="cmt-bottom">
    <div class="recomment-bottom">
      <input class="btm-recomment" type="text" v-model="recomment" placeholder="留下你的精彩评论吧" />
      <span class="iconfont icon-aite"></span>
      <span class="iconfont icon-biaoqing"></span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      recomment: "",
    }
  },
}
</script>

<style scoped>
#cmt-bottom {
  height: 60px;
  position: absolute;
  bottom: -59px;
  left: 0;
  width: 100%;
  z-index: 20;
  border-top: 2px solid #f9f9f9;
  background-color: #ffffff;
  line-height: 60px;
}
.recomment-bottom .btm-recomment {
  /* display: inline-block; */
  border: none;
  outline: 0;
  text-align: left;
  width: 80%;
  padding-left: 15px;
}
.recomment-bottom > .iconfont {
  font-size: 25px;
  display: inline-block;
  width: 10%;
}
</style>
