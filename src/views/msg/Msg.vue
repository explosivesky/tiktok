<template>
  <div id="follow">
    <msg-nav-bar class="padding" @input="input" />
    <router-view></router-view>
  </div>
</template>

<script>
import MsgNavBar from '../../components/common/msgNavBar/MsgNavBar'
export default {
  components: {
    MsgNavBar
  },
  methods: {
    input () {
      this.$router.replace('/friendList')
    }
  }
}
</script>

<style scoped>
#follow {
  background-color: #151723;
  overflow: hidden;
  overflow-y: scroll;
  height: calc(100vh);
}
</style>