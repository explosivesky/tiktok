<template>
  <div class="top-title">
    <span>15.2W条评论</span>
    <span class="close" @click.stop.prevent="handle">×</span>
  </div>
</template>

<script>
export default {
  porps: ["index"],
  methods: {
    handle() {
      // this.$bus.$emit("closeFn", this.index, false)
      this.$store.commit("noShow", false)
    },
  },
}
</script>

<style scoped>
.top-title {
  height: 20px;
  line-height: 20px;
  font-size: 16px;
}
.top-title .close {
  float: right;
  font-size: 25px;
  font-weight: 500;
  color: #929294;
}
</style>
