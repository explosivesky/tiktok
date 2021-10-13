<template>
  <div id="comment">
    <cmt-title :index="index" />
    <scroll class="scroll">
      <cmt-users></cmt-users>
      <cmt-users></cmt-users>
      <cmt-users></cmt-users>
      <cmt-users></cmt-users>
    </scroll>
    <cmt-bottom />
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll"
import CmtTitle from "./CmtTitle"
import CmtBottom from "./CmtBottom"
import CmtUsers from "./CmtUsers"
export default {
  data () {
    return {}
  },
  props: ["index"],
  methods: {
  },
  components: {
    Scroll,
    CmtTitle,
    CmtBottom,
    CmtUsers,
  },
}
</script>

<style scoped>
#comment {
  position: relative;
  bottom: 500px;
  left: 0;
  right: 0;
  height: 500px;
  background-color: #ffffff;
  z-index: 20;
  padding: 10px;
  font-size: 14px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.scroll {
  position: absolute;
  bottom: 0;
  left: 0;
  height: calc(100% - 50px);
  overflow: hidden;
  z-index: 20;
}
</style>
