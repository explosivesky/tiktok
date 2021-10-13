<template>
  <div id="friend-list">
    <div class="friend-list">
      <avatar />
      <avatar />
      <avatar />
      <avatar />
      <avatar />
      <avatar />
    </div>
  </div>
</template>

<script>
import Avatar from '../../../components/common/avatar/Avatar'
export default {
  components: {
    Avatar
  }
}
</script>

<style scoped>
#friend-list {
}
.friend-list {
  margin-top: 15px;
  padding-bottom: 60px;
}
</style>