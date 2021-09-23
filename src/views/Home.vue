<template>
  <div id="home">
    <router-view></router-view>
    <tab-bar></tab-bar>

  </div>
</template>

<script>
import TabBar from 'components/common/tabBar/TabBar'
export default {
  name: 'Home',
  components: {
    TabBar
  }
}
</script>
<style scoped>
</style>
