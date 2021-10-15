<template>
  <div id="friend-list">
    <scroll class="scroll" :scrollY="true">
      <div class="friend-list">
        <avatar />
        <avatar />
        <avatar />
        <avatar />
        <avatar />
        <avatar />
        <avatar />
        <avatar />
        <avatar />
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll"
import Avatar from 'components/common/avatar/Avatar'
export default {
  components: {
    Avatar,
    Scroll
  }
}
</script>

<style scoped>
#friend-list {
  height: 100vh;
}
.friend-list {
  margin-top: 15px;
  padding-bottom: 60px;
}
.scroll {
  height: calc(100% - 120px);
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;
}
</style>